import { uuid } from 'uuidv4';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import UserToken from '../models/UserToken';

class ForgotPasswordController {
  async forgot(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).json({ error: 'user does not exists.' });
    }

    const tokenUuid = uuid();

    const token = await UserToken.create({
      token: tokenUuid,
      user_id: user.id,
    });

    // Send Forgot Password Email

    return res.status(200).json(token);
  }

  async recover(req, res) {
    const { token } = req.body;

    const userToken = UserToken.findOne({ where: { token } });

    const user = User.findByPk(userToken.user_id);

    const newUser = await user.update({
      password_hash: bcrypt.hash(req.password, 8),
    });

    return res.json(newUser);
  }
}

export default new ForgotPasswordController();
