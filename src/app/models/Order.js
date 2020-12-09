import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.FLOAT,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      through: 'order_products',
      foreignKey: 'order_id',
      as: 'product',
    });
    this.belongsTo(models.User, {
      foreignKey: 'buyer_id',
      as: 'buyer',
    });
  }
}

export default Order;
