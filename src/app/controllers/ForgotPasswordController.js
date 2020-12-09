import { uuid } from 'uuidv4';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import UserToken from '../models/UserToken';

import Queue from '../../lib/Queue';
import RecoveryPassword from '../../jobs/RecoveryPassword';

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

    await Queue.add(RecoveryPassword.key, {
      token: tokenUuid,
      user,
    });

    return res.status(200).json(token);
  }

  async recover(req, res) {
    const { token, password } = req.body;

    const userToken = await UserToken.findOne({ where: { token } });

    const user = await User.findByPk(userToken.user_id);

    const newPassword = await bcrypt.hash(password, 8);

    const newUser = await user.update({
      password_hash: newPassword,
    });

    return res.json(newUser);
  }
}

export default new ForgotPasswordController();
