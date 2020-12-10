import jwt from 'jsonwebtoken';
import User from '../models/User';
import Admin from '../models/Admin';
import authConfig from '../../config/auth';

class SessionController {
  async storeAdmin(req, res) {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({ error: 'admin not found' });
    }

    if (!(await admin.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { id, name } = admin;

    return res.json({
      data: {
        admin: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id, admin: true }, authConfig.secret, {
          expiresIn: authConfig.expiresIn * 60 * 60,
        }),
      },
    });
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { id, name } = user;

    return res.json({
      data: {
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id, admin: false }, authConfig.secret, {
          expiresIn: authConfig.expiresIn * 60 * 60,
        }),
      },
    });
  }
}

export default new SessionController();
