export default [
  {
    path: '/user',
    layout: false,
    routes: [{path: '/user/login', component: './User/Login'}, {path: '/user/register', component: './User/Register'}]
  },
  {path: '/study', icon: 'BookOutlined', component: './Levels/LevelsPage', name: '学习'},
  {path: '/study/:id', icon: 'BookOutlined', component: './Levels/LevelsPage'},
  {path: '/code', icon: 'ExperimentOutlined', component: './CodeGenerate/CodeGenerate', name: '代码生成'},
  {path: '/level', icon: 'ThunderboltOutlined', component: './LevelIndex/LevelIndex', name: '关卡'},
  {path: '/square', icon: 'smile', component: './Square/Square', name: '广场'},
  {
    path: '/library',
    icon: 'crown',
    name: '库表大全',
    routes: [
      {icon: 'table', path: '/library/vocabulary', component: './Admin/User', name: '词库'},
      {icon: 'table', path: '/library/table', component: './Admin/User', name: '表'},
      {icon: 'table', path: '/library/field', component: './Admin/User', name: '字段'},
    ],
  },
  {
    icon: 'github',
    name: '代码开源',
    routes: [
      {path: 'https://github.com/lhccong/sql-dog-frontend', name: '前端💡'},
      {path: 'https://github.com/lhccong/sql-dog-backend', name: '后端🚀'},
    ],
  },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/user'},
      {icon: 'table', path: '/admin/user', component: './Admin/User', name: '用户管理'},
      {path: '/admin', redirect: '/admin/topicLevel'},
      {icon: 'table', path: '/admin/topicLevel', component: './Admin/TopicLevel', name: '关卡管理'},
    ],
  },
  {path: '/', redirect: '/square'},
  {path: '*', layout: false, component: './404'},
];
