export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       path: '/user',
  //       routes: [
  //         {
  //           name: 'login',
  //           path: '/user/login',
  //           component: './user/Login',
  //         },
  //       ],
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    path: '/map',
    name: 'mapbox-demo',
    icon: 'FundOutlined',
    access: 'canAdmin',
    component: './Map',
  },
  {
    path: '/',
    redirect: '/map',
  },
  {
    component: './404',
  },
];
