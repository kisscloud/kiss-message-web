import DashboardView from '../layouts/dashboard.vue';
import NotFoundView from './errors/not-found.vue';

// Overview
import HomeView from './home.vue';

// import StartedView from './getting-started.vue';

// Layouts
// const GridView = () => import('./layouts/grid.vue');
// const LevelView = () => import('./layouts/level.vue');
// const StackView = () => import('./layouts/stack.vue');
// const ScrollView = () => import('./layouts/scroll-view.vue');
// const TemplatesView = () => import(/* webpackChunkName: "templates" */ './layouts/templates/index.vue');
// const CenterTemplate = () => import(/* webpackChunkName: "templates" */ './layouts/templates/center.vue');
// const MiniTemplate = () => import(/* webpackChunkName: "templates" */ './layouts/templates/mini.vue');

// Core
// const ButtonsView = () => import('./core/buttons.vue');
// const BadgesView = () => import('./core/badges.vue');
// const PanelsView = () => import('./core/panels.vue');
// const NotesView = () => import('./core/notes.vue');
// const BoxesView = () => import('./core/boxes.vue');
// const ProgressView = () => import('./core/progress.vue');
// const TagsView = () => import('./core/tags.vue');
// const DividerView = () => import('./core/divider.vue');
// const IconsView = () => import('./core/icons.vue');

// Navigations
// const MenuView = () => import('./navigations/menu.vue');
// const PaginationView = () => import('./navigations/pagination.vue');
// const BreadcrumbView = () => import('./navigations/breadcrumb.vue');
// const DropdownView = () => import('./navigations/dropdown.vue');
// const NavsView = () => import('./navigations/navs.vue');
// const NavbarView = () => import('./navigations/navbar.vue');
// const StepsView = () => import('./navigations/steps.vue');
// const TabsView = () => import('./navigations/tabs.vue');

// Feedback
// const PopupView = () => import('./feedback/popup.vue');
// const FlashView = () => import('./feedback/flash.vue');
// const ModalView = () => import('./feedback/modal.vue');
// const AlertView = () => import('./feedback/alert.vue');
// const ToastView = () => import('./feedback/toast.vue');
// const TooltipView = () => import('./feedback/tooltip.vue');
// const NotificationView = () => import('./feedback/notification.vue');

// Forms
// const FormControlsView = () => import('./form/controls.vue');
// const FormLayoutsView = () => import('./form/layouts.vue');
// const FormValidationView = () => import('./form/validation.vue');
// const FormDatePickerView = () => import('./form/date-picker.vue');
// const EditorView = () => import('./form/editor.vue');
// const SelectView = () => import('./form/select.vue');
// const SliderView = () => import('./form/slider.vue');

// Data
// const TablesView = () => import('./data/tables.vue');
// const ChartsView = () => import('./data/charts/index.vue');

// Extra
// const AccountView = () => import('./blocks/account.vue');
// const CellView = () => import('./blocks/cell.vue');
// const ListView = () => import('./blocks/list.vue');
// const SignView = () => import('./blocks/sign.vue');
// const MessageView = () => import('./blocks/message.vue');
// const CardView = () => import('./blocks/card.vue');
// const StreamView = () => import('./blocks/stream.vue');
// const ToolbarView = () => import('./blocks/toolbar.vue');
// const WidgetsView = () => import('./widgets/index.vue');
// const UtilitiesView = () => import('./utilities/index.vue');

// Pages
const AuthLogin = () => import('./pages/login.vue');
const TwoFactor = () => import('./pages/two-factor.vue');
const RegisterView = () => import('./pages/register.vue');
const ForgotView = () => import('./pages/forgot.vue');
const ResetView = () => import('./pages/reset.vue');
const ErrorView = () => import('./pages/error.vue');

const PermissionUsers = () => import('./permission/users.vue');
const PermissionPermissions = () => import('./permission/permissions.vue');
const PermissionRoles = () => import('./permission/roles.vue');
const PermissionLogs = () => import('./permission/logs.vue');
const ClientsView = () => import('./clients.vue');

export default [{
    path: '/auth/login',
    component: AuthLogin
  },
  {
    path: '/auth/two-factor',
    component: TwoFactor
  },
  {
    path: '/auth/register',
    component: RegisterView
  },
  {
    path: '/auth/forgot',
    component: ForgotView
  },
  {
    path: '/auth/reset',
    component: ResetView
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
        path: '/permission/logs',
        component: PermissionLogs
      },
      {
        path: '/permission/roles',
        component: PermissionRoles
      },
      {
        path: '/permission/accounts',
        component: PermissionUsers
      },
      {
        path: '/permission/permissions',
        component: PermissionPermissions
      },
      {
        path: '/clients',
        component: ClientsView
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
