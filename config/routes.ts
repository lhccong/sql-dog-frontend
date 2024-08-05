export default [
  {
    path: '/user',
    layout: false,
    routes: [{path: '/user/login', component: './User/Login'}, {path: '/user/register', component: './User/Register'}]
  },
  {path: '/square', icon: 'smile', component: './Square', name: '广场'},
  {path: '/level', icon: 'ThunderboltOutlined', component: './Square', name: '关卡'},
  {path: '/study', icon: 'BookOutlined', component: './Square', name: '学习'},
  {path: 'https://github.com/lhccong/sql-dog-backend', icon: 'github', name: '代码开源'},
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/user'},
      {icon: 'table', path: '/admin/user', component: './Admin/User', name: '用户管理'},
    ],
  },
  {path: '/', redirect: '/square'},
  {path: '*', layout: false, component: './404'},
];
