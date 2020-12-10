import Order from '../models/Order';
import User from '../models/User';

class RelatoryController {
  async userRelatory(req, res) {
    const { rows, count } = await Order.findAndCountAll({
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: 'buyer',
        },
      ],
    });

    return res.status(200).json({ data: rows, total: count });
  }

  async userRelatories(req, res) {
    const { id } = req.params;

    const { rows, count } = await Order.findAndCountAll({
      where: { buyer_id: id },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: 'buyer',
        },
      ],
    });

    return res.status(200).json({ data: rows, total: count });
  }
}

export default new RelatoryController();
