import Order from '../models/Order';
import User from '../models/User';

class RelatoryController {
  async userRelatory(req, res) {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: 'buyer',
        },
      ],
    });

    return res.status(200).json({ data: orders });
  }

  async userRelatories(req, res) {
    const { id } = req.params;

    const orders = await Order.findAll({
      where: { buyer_id: id },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: 'buyer',
        },
      ],
    });

    return res.status(200).json({ data: orders });
  }
}

export default new RelatoryController();
