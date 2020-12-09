import Sequelize from 'sequelize';

import User from '../app/models/User';
import UserToken from '../app/models/UserToken';
import Admin from '../app/models/Admin';
import Category from '../app/models/Category';
import Product from '../app/models/Product';
import Order from '../app/models/Order';

import databaseConfig from '../config/database';

const models = [User, UserToken, Admin, Category, Product, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
