module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Cachaças',
          description: 'É CACHAÇA CARAI',
          url:
            'https://media.gazetadopovo.com.br/2019/07/05161330/cachacaPixabay-960x540.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Corotes',
          description: 'Não beba se for menor de 36 anos',
          url:
            'https://img.vixdata.io/pd/webp-large/pt/sites/default/files/c/corote-sabores-foto-garrafas-0220-1400x800.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cervejas',
          description: 'Para aproveitar a noite',
          url:
            'https://conteudo.imguol.com.br/c/entretenimento/9d/2020/02/19/alcool-cerveja-1582132883580_v2_900x506.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Whiskys',
          description: 'Coisa de rico, sei não.',
          url:
            'https://chapiuski.com.br/wp-content/uploads/2017/02/whiskies-jhonnie-walker-e1489370968908.jpeg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
