import Mail from '../lib/Mail';

class NewOrderMail {
  get key() {
    return 'recoverypassword';
  }

  async handle({ data }) {
    const { user, token } = data;

    await Mail.sendMail({
      from: `Equipe Alcoolmerce <noreply@alcoolmerce.com>`,
      to: `${user.name} <${user.email}>`,
      subject: '[Alcoomerce] Recupera tua senha aí mah !',
      template: 'recoverypassword',
      context: {
        name: user.name,
        link: `localhost:3000/reset_password/${token}`,
      },
    });
  }
}

export default new NewOrderMail();
