import Category from '../models/Category';

class CategoryController {
  async list(req, res) {
    const categories = await Category.findAll({});
    return res.status(200).json(categories);
  }

  async store(req, res) {
    const categoryExists = await Category.findOne({
      where: { name: req.body.name },
    });

    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists.' });
    }

    const category = await Category.create(req.body);

    return res.status(200).json(category);
  }

  async remove(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(401).json({ error: 'Category does not exist' });
    }

    await category.destroy();

    return res.status(204);
  }
}

export default new CategoryController();
