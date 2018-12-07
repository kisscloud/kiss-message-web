import DashboardView from '../layouts/dashboard.vue';
import NotFoundView from './errors/not-found.vue';


import HomeView from './home.vue';

const AuthLogin = () => import('./pages/login.vue');
const ErrorView = () => import('./pages/error.vue');
const CurrenciesView = () => import('./currencies.vue');
const OperationLogsView = () => import('./operation-logs.vue');


export default [{
    path: '/auth/login',
    component: AuthLogin
  },
  {
    path: '/error',
    component: ErrorView
  },
  {
    path: '/',
    component: DashboardView,
    children: [
      {
        path: '/currencies',
        component: CurrenciesView
      },
      {
        path: '/operation/logs',
        component: OperationLogsView
      },
      {
        path: '',
        component: HomeView
      }
    ]
  },
  {
    path: '*',
    component: NotFoundView
  }
];
