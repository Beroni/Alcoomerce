import Mail from '../lib/Mail';

class NewOrderMail {
  get key() {
    return 'neworder';
  }

  async handle({ data }) {
    const { user, order } = data;

    await Mail.sendMail({
      from: `Equipe Alcoolmerce <noreply@alcoolmerce.com>`,
      to: `${user.name} <${user.email}>`,
      subject: '[Alcoomerce] Bora encher a cara !',
      template: 'neworder',
      context: {
        name: user.name,
        amount: order.amount,
        invoice_number: order.id,
        invoice_date: order.created_at,
        address: `${user.street}, N° ${user.number}, ${user.city} ${user.complement}`,
      },
    });
  }
}

export default new NewOrderMail();
