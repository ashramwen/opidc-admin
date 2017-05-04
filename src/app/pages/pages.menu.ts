export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'client',
        data: {
          menu: {
            title: 'general.menu.client',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'scope',
        data: {
          menu: {
            title: 'general.menu.scope',
            selected: false,
            expanded: false,
            order: 300
          }
        }
      },
      {
        path: 'site',
        data: {
          menu: {
            title: 'general.menu.site',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'token',
        data: {
          menu: {
            title: 'general.menu.token',
            selected: false,
            expanded: false,
            order: 200
          }
        }
      }
    ]
  }
];
