import Product from '../models/Product';

class ProductController {
  async list(req, res) {
    const products = await Product.findAll({});

    return res.status(200).json({
      data: products,
    });
  }

  async index(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    return res.status(200).json({ data: product });
  }

  async filter(req, res) {
    const { id } = req.params;
    const products = await Product.findAll({
      where: {
        category_id: id,
      },
    });
    return res.status(200).json({ data: products });
  }

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.status(200).json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    const newProduct = await product.update(req.body);

    return res.json(newProduct);
  }

  async remove(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(401).json({ error: 'Product does not exist' });
    }

    await product.destroy();

    return res.status(204).json();
  }
}

export default new ProductController();
