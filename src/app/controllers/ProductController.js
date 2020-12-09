import Product from '../models/Product';

class ProductController {
  async list(req, res) {
    const products = await Product.findAll({});

    return res.status(200).json(products);
  }

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.status(200).json(product);
  }

  async update(req, res) {
    const product = await Product.findByPk(req.userId);

    const newProduct = await product.update(req.body);

    return res.json(newProduct);
  }
}

export default new ProductController();
