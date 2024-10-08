import { BarChartOutlined, FileOutlined, TableOutlined, EditOutlined } from '@ant-design/icons';
export default [
  {
    path: '/user',
    layout: false,
    routes: [{path: '/user/login', component: './User/Login'}, {path: '/user/register', component: './User/Register'}]
  },
  {path: '/study', icon: 'BookOutlined', component: './Levels/LevelsPage', name: '学习'},
  {path: '/study/:id', icon: 'BookOutlined', component: './Levels/LevelsPage'},
  {path: '/userDetail', component: './User/UserDetail'},
  {path: '/code', icon: 'ExperimentOutlined', component: './CodeGenerate/CodeGenerate', name: '代码生成'},
  {path: '/level', icon: 'ThunderboltOutlined', component: './LevelIndex/LevelIndex', name: '关卡'},
  {path: '/square', icon: 'smile', component: './Square/Square', name: '广场'},
  {
    path: '/library',
    icon: 'crown',
    name: '库表大全',
    routes: [
      // {icon: 'table', path: '/library/dict', component: './TableInfo/TableInfo', name: '🧊词库大全'},
      {icon: 'table', path: '/library/table', component: './TableInfo/TableInfo', name: '📜表大全'},
      {icon: 'table', path: '/library/field', component: './FieldInfo/FieldInfo', name: '📗字段大全'},
    ],
  },
  {
    path: '/github',
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
      {icon: 'table', path: '/admin/topicLevel', component: './Admin/TopicLevel', name: '关卡管理'},
      {icon: 'table', path: '/admin/tableInfo', component: './Admin/TableInfo', name: '表格管理'},
      {icon: 'table', path: '/admin/fieldInfo', component: './Admin/FieldInfo', name: '字段管理'},
    ],
  },
  {path: '/', redirect: '/code'},
  {path: '*', layout: false, component: './404'},
];
