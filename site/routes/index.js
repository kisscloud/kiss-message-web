import DashboardView from '../layouts/dashboard.vue';
import NotFoundView from './errors/not-found.vue';

// Overview
import HomeView from './home.vue';

// Pages
const AuthLogin = () => import('./pages/login.vue');
const ErrorView = () => import('./pages/error.vue');


const ClientsView = () => import('./clients.vue');
const MailTemplatesView = () => import('./mail-templates.vue');
const SMSTemplatesView = () => import('./sms-templates.vue');
const OperationLogsView = () => import('./operation-logs.vue');
const MessageLogsView = () => import('./message-logs.vue');

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
      // 添加路由
      {
        path: '/clients',
        component: ClientsView
      },
      {
        path: '/mail/templates',
        component: MailTemplatesView
      },
      {
        path: '/sms/templates',
        component: SMSTemplatesView
      },
      {
        path: '/operation/logs',
        component: OperationLogsView
      },
      {
        path: '/message/logs',
        component: MessageLogsView
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
