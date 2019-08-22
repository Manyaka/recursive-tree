export default {
  root: 'root',
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

/*export default {
  title: 'A cool folder',
  subitems: [
    {
      title: 'A cool sub-folder 1',
      subitems: [
        { title: 'A cool sub-sub-folder 1' },
        { title: 'A cool sub-sub-folder 2' }
      ]
    },
    { title: 'This one is not that cool' }
  ]
};*/
