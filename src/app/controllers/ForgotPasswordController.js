import bcrypt from 'bcryptjs';
import User from '../models/User';
import UserToken from '../models/UserToken';

import Queue from '../../lib/Queue';
import RecoveryPassword from '../../jobs/RecoveryPassword';

class ForgotPasswordController {
  async forgot(req, res) {
    let user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).json({ error: 'user does not exists.' });
    }

    const newPassword = Math.floor(100000 + Math.random() * 900000).toString();

    const hashPassword = await bcrypt.hash(newPassword, 8);

    user = await user.update({
      password_hash: hashPassword,
    });

    await Queue.add(RecoveryPassword.key, {
      token: newPassword,
      user,
    });

    return res.status(204).json();
  }

  async recover(req, res) {
    const { token, password } = req.body;

    const userToken = await UserToken.findOne({ where: { token } });

    const user = await User.findByPk(userToken.user_id);

    const newPassword = await bcrypt.hash(password, 8);

    const newUser = await user.update({
      password_hash: newPassword,
    });

    return res.json({ data: newUser });
  }
}

export default new ForgotPasswordController();
