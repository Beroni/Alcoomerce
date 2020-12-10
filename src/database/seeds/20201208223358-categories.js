module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Cachaças',
          description: 'É CACHAÇA CARAI',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Corotes',
          description: 'Não beba se for menor de 36 anos',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cervejas',
          description: 'Para aproveitar a noite',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Whiskys',
          description: 'Coisa de rico, sei não.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
