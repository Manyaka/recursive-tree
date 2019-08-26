export default {
  title: 'Меню',
  url: 'https://path/to/something',
  selected: true,
  subitems: [
    {
      title: 'Описание',
      url: 'https://path/to/something',
      selected: false
    },
    {
      title: 'Тарифные планы',
      url: 'https://path/to/something',
      selected: false
    },
    {
      title: 'API',
      url: 'https://path/to/something',
      selected: true,
      subitems: [
        {
          title: 'API 1',
          url: 'https://path/to/something',
          selected: false
        },
        {
          title: 'API 2',
          url: 'https://path/to/something',
          selected: false
        },
        {
          title: 'API 3',
          url: 'https://path/to/something',
          selected: true,
          subitems: []
        }
      ]
    },
    {
      title: 'Документация',
      url: 'https://path/to/something',
      selected: false
    }
  ]
};
