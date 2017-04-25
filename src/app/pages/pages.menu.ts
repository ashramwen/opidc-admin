export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'client',
        data: {
          menu: {
            title: 'general.menu.client',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'site',
        data: {
          menu: {
            title: 'general.menu.site',
            icon: 'fa fa-home',
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
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 200
          }
        }
      },
      {
        path: 'profile',
        data: {
          menu: {
            title: 'general.menu.profile',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 300
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 400
          }
        }
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          }
        ]
      }
    ]
  }
];
