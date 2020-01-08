export default {
  id: 'menu_0',
  title: 'Меню',
  url: 'https://path/to/something',
  selected: true,
  subitems: [
    {
      id: 'subitems_0',
      title: 'Описание',
      url: 'https://path/to/something',
      selected: false
    },
    {
      id: 'subitems_1',
      title: 'Тарифные планы',
      url: 'https://path/to/something',
      selected: false
    },
    {
      id: 'subitems_2',
      title: 'API',
      url: 'https://path/to/something',
      selected: true,
      subitems: [
        {
          id: 'sub_subitems_0',
          title: 'API 1',
          url: 'https://path/to/something',
          selected: false
        },
        {
          id: 'sub_subitems_1',
          title: 'API 2',
          url: 'https://path/to/something',
          selected: false
        },
        {
          id: 'sub_subitems_2',
          title: 'API 3',
          url: 'https://path/to/something',
          selected: true,
          subitems: []
        }
      ]
    },
    {
      id: 'subitems_3',
      title: 'Документация',
      url: 'https://path/to/something',
      selected: false
    }
  ]
};
