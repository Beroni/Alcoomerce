import '../bootstrap';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'alcoomerce',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
