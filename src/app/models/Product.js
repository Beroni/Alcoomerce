import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        info: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        url: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });

    this.belongsToMany(models.Order, {
      through: 'order_products',
      foreignKey: 'product_id',
      as: 'order',
    });
  }
}

export default Product;
