import Mail from '../lib/Mail';

class NewOrderMail {
  get key() {
    return 'neworder';
  }

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: `Equipe Alcoolmerce <noreply@alcoomercet.com>`,
      to: `${user.name} <${user.email}>`,
      subject: '[Alcoomerce] Bora encher a cara !',
      template: 'neworder',
      context: {
        deliverer: user.name,
        address: `${user.street}, N° ${user.number}, ${user.city} ${user.complement}`,
      },
    });
  }
}

export default new NewOrderMail();
