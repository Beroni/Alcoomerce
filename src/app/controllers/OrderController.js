import Queue from '../../lib/Queue';
import Order from '../models/Order';
import NewOrder from '../../jobs/NewOrder';
import User from '../models/User';

class OrderController {
  async store(req, res) {
    const { products, amount } = req.body;

    const userId = req.userId ? req.userId : 1;
    const order = await Order.create({ buyer_id: userId, amount });

    order.setProduct(products);

    const user = await User.findByPk(userId);

    await Queue.add(NewOrder.key, {
      user,
      order,
    });

    return res.status(201).json({ data: order });
  }
}

export default new OrderController();
