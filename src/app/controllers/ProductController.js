import Product from '../models/Product';

class ProductController {
  async list(req, res) {
    let filter = {};
    try {
      filter = req.query.filter;
      filter = JSON.parse(filter);
    } catch (err) {
      filter = {};
    }

    const { rows, count } = await Product.findAndCountAll({
      where: {
        ...filter,
      },
    });

    return res.status(200).json({
      data: rows,
      total: count,
    });
  }

  async index(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    return res.status(200).json({ data: product, total: 1 });
  }

  async filter(req, res) {
    const { id } = req.params;
    const { rows, count } = await Product.findAndCountAll({
      where: {
        category_id: id,
      },
    });
    return res.status(200).json({ data: rows, total: count });
  }

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.status(201).json({ data: product });
  }

  async update(req, res) {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    const newProduct = await product.update(req.body);

    return res.json({ data: newProduct });
  }

  async remove(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(401).json({ error: 'Product does not exist' });
    }

    await product.destroy();

    return res.status(200).json({ data: { id } });
  }
}

export default new ProductController();
