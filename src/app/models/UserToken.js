import Sequelize, { Model } from 'sequelize';

class UserToken extends Model {
  static init(sequelize) {
    super.init(
      {
        token: Sequelize.UUID,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default UserToken;
