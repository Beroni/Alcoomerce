import Mail from '../lib/Mail';

class NewOrderMail {
  get key() {
    return 'neworder';
  }

  async handle({ data }) {
    const { user, token } = data;

    await Mail.sendMail({
      from: `Equipe Alcoolmerce <noreply@alcoomercet.com>`,
      to: `${user.name} <${user.email}>`,
      subject: '[Alcoomerce] Recupera tua senha aí mah !',
      template: 'forgotpassword',
      context: {
        name: user.name,
        link: `${process.env.APP_WEB_URL}/reset_password?token=${token}`,
      },
    });
  }
}

export default new NewOrderMail();
