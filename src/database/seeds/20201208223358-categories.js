module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Cachaças',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Corotes',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cervejas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Whiskys',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
