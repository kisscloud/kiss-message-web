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

export default [
  {
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

  // Templates
  // {
  //   path: '/templates/center',
  //   component: CenterTemplate
  // },
  // {
  //   path: '/templates/mini',
  //   component: MiniTemplate
  // },

  // Dashboard
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
      // 原有路由
      // Layouts
      // {
      //   path: '/layouts/templates',
      //   component: TemplatesView
      // },
      // {
      //   path: '/layouts/grid',
      //   component: GridView
      // },
      // {
      //   path: '/layouts/level',
      //   component: LevelView
      // },
      // {
      //   path: '/layouts/stack',
      //   component: StackView
      // },
      // {
      //   path: '/layouts/scroll-view',
      //   component: ScrollView
      // },

      // Core
      // {
      //   path: '/core/icons',
      //   component: IconsView
      // },
      // {
      //   path: '/core/panels',
      //   component: PanelsView
      // },
      // {
      //   path: '/core/buttons',
      //   component: ButtonsView
      // },
      // {
      //   path: '/core/badges',
      //   component: BadgesView
      // },
      // {
      //   path: '/core/tags',
      //   component: TagsView
      // },
      // {
      //   path: '/core/notes',
      //   component: NotesView
      // },
      // {
      //   path: '/core/boxes',
      //   component: BoxesView
      // },
      // {
      //   path: '/core/progress',
      //   component: ProgressView
      // },
      // {
      //   path: '/core/divider',
      //   component: DividerView
      // },

      // Navigations
      // {
      //   path: '/navigations/menu',
      //   component: MenuView
      // },
      // {
      //   path: '/navigations/pagination',
      //   component: PaginationView
      // },
      // {
      //   path: '/navigations/breadcrumb',
      //   component: BreadcrumbView
      // },
      // {
      //   path: '/navigations/dropdown',
      //   component: DropdownView
      // },
      // {
      //   path: '/navigations/navs',
      //   component: NavsView
      // },
      // {
      //   path: '/navigations/navbar',
      //   component: NavbarView
      // },
      // {
      //   path: '/navigations/steps',
      //   component: StepsView
      // },
      // {
      //   path: '/navigations/tabs',
      //   component: TabsView
      // },

      // Forms
      // {
      //   path: '/form/controls',
      //   component: FormControlsView
      // },
      // {
      //   path: '/form/layouts',
      //   component: FormLayoutsView
      // },
      // {
      //   path: '/form/validation',
      //   component: FormValidationView
      // },
      // {
      //   path: '/form/date-picker',
      //   component: FormDatePickerView
      // },
      // {
      //   path: '/form/editor',
      //   component: EditorView
      // },
      // {
      //   path: '/form/select',
      //   component: SelectView
      // },
      // {
      //   path: '/form/slider',
      //   component: SliderView
      // },

      // Data
      // {
      //   path: '/data/tables',
      //   component: TablesView
      // },
      // {
      //   path: '/data/charts',
      //   component: ChartsView
      // },

      // // Feedback
      // {
      //   path: '/feedback/popup',
      //   component: PopupView
      // },
      // {
      //   path: '/feedback/modal',
      //   component: ModalView
      // },
      // {
      //   path: '/feedback/alert',
      //   component: AlertView
      // },
      // {
      //   path: '/feedback/flash',
      //   component: FlashView
      // },
      // {
      //   path: '/feedback/toast',
      //   component: ToastView
      // },
      // {
      //   path: '/feedback/tooltip',
      //   component: TooltipView
      // },
      // {
      //   path: '/feedback/notification',
      //   component: NotificationView
      // },

      // Extra
      // {
      //   path: '/blocks/account',
      //   component: AccountView
      // },
      // {
      //   path: '/blocks/cell',
      //   component: CellView
      // },
      // {
      //   path: '/blocks/list',
      //   component: ListView
      // },
      // {
      //   path: '/blocks/sign',
      //   component: SignView
      // },
      // {
      //   path: '/blocks/message',
      //   component: MessageView
      // },
      // {
      //   path: '/blocks/card',
      //   component: CardView
      // },
      // {
      //   path: '/blocks/stream',
      //   component: StreamView
      // },
      // {
      //   path: '/blocks/toolbar',
      //   component: ToolbarView
      // },
      // {
      //   path: '/widgets',
      //   component: WidgetsView
      // },
      // {
      //   path: '/utilities',
      //   component: UtilitiesView
      // },
      // {
      //   path: '/getting-started',
      //   component: StartedView
      // },
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
