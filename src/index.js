import './styles/global.scss';
// Directives
import Tooltip from './directives/tooltip';

// Layouts
import { App, Sider, Brand, Content, Header, Body, Main, Footer } from './components/layout';
import { Row, Col } from './components/grid';
import { Level, LevelItem } from './components/level';
import Stack from './components/stack';
import ScrollView from './components/scroll-view';

// Core
import { Button, ButtonGroup } from './components/button';
import Panel from './components/panel';
import Badge from './components/badge';
import Tag from './components/tag';
import Box from './components/box';
import Note from './components/note';
import Icon from './components/icon';
import Divider from './components/divider';
import { ProgressBar, ProgressCircle } from './components/progress';

// Navigations
import Dropdown from './components/dropdown';
import { Dropmenu, DropmenuItem, DropmenuDivider } from './components/dropmenu';
import { Menu, MenuHeading, MenuItem, MenuDivider, Submenu } from './components/menu';
import { Nav, NavItem } from './components/nav';
import { Steps, StepsItem } from './components/steps';
import { Tabs, TabsPane } from './components/tabs';
import Pagination from './components/pagination';

// Feedback
import Flash from './components/flash';
import Alert from './components/alert';
import Popup from './components/popup';
import Modal from './components/modal';
import Toast from './components/toast';
import { notify, Notification, NotificationList } from './components/notification';

// Form
import {
  Form,
  FormInput,
  FormAddon,
  FormGroup,
  FormField,
  FormRadio,
  FormCheckbox,
  FormSwitch,
  FormSelect,
  FormTextarea,
  FormCounter
} from './components/form';
import Slider from './components/slider';

export {
  App,
  Sider,
  Brand,
  Content,
  Header,
  Body,
  Main,
  Footer,
  Row,
  Col,
  Level,
  LevelItem,
  Stack,
  ScrollView,
  Button,
  ButtonGroup,
  Panel,
  Badge,
  Tag,
  Box,
  Note,
  Icon,
  Divider,
  ProgressBar,
  ProgressCircle,
  Dropdown,
  Dropmenu,
  DropmenuItem,
  DropmenuDivider,
  Menu,
  MenuHeading,
  MenuItem,
  MenuDivider,
  Submenu,
  Nav,
  NavItem,
  Steps,
  StepsItem,
  Tabs,
  TabsPane,
  Pagination,
  Flash,
  Alert,
  Popup,
  Modal,
  Toast,
  notify,
  Notification,
  NotificationList
};

const install = Vue => {
  // Directives
  Vue.directive(Tooltip.name, Tooltip);

  // Layouts
  Vue.component(App.name, App);
  Vue.component(Sider.name, Sider);
  Vue.component(Brand.name, Brand);
  Vue.component(Content.name, Content);
  Vue.component(Header.name, Header);
  Vue.component(Body.name, Body);
  Vue.component(Main.name, Main);
  Vue.component(Footer.name, Footer);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Level.name, Level);
  Vue.component(LevelItem.name, LevelItem);
  Vue.component(Stack.name, Stack);
  Vue.component(ScrollView.name, ScrollView);

  // Core
  Vue.component(Badge.name, Badge);
  Vue.component(Tag.name, Tag);
  Vue.component(Box.name, Box);
  Vue.component(Note.name, Note);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Panel.name, Panel);
  Vue.component(Icon.name, Icon);
  Vue.component(Divider.name, Divider);
  Vue.component(ProgressBar.name, ProgressBar);
  Vue.component(ProgressCircle.name, ProgressCircle);

  // Navigations
  Vue.component(Nav.name, Nav);
  Vue.component(NavItem.name, NavItem);
  Vue.component(Menu.name, Menu);
  Vue.component(MenuHeading.name, MenuHeading);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(MenuDivider.name, MenuDivider);
  Vue.component(Submenu.name, Submenu);
  Vue.component(Pagination.name, Pagination);
  Vue.component(Steps.name, Steps);
  Vue.component(StepsItem.name, StepsItem);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(Dropmenu.name, Dropmenu);
  Vue.component(DropmenuItem.name, DropmenuItem);
  Vue.component(DropmenuDivider.name, DropmenuDivider);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabsPane.name, TabsPane);

  // Forms
  Vue.component(Form.name, Form);
  Vue.component(FormInput.name, FormInput);
  Vue.component(FormAddon.name, FormAddon);
  Vue.component(FormGroup.name, FormGroup);
  Vue.component(FormField.name, FormField);
  Vue.component(FormRadio.name, FormRadio);
  Vue.component(FormCheckbox.name, FormCheckbox);
  Vue.component(FormSwitch.name, FormSwitch);
  Vue.component(FormSelect.name, FormSelect);
  Vue.component(FormTextarea.name, FormTextarea);
  Vue.component(FormCounter.name, FormCounter);
  Vue.component(Slider.name, Slider);

  // Feedback
  Vue.component(Popup.name, Popup);
  Vue.component(Modal.name, Modal);
  Vue.component(Flash.name, Flash);
  Vue.component(Toast.name, Toast);
  Vue.prototype.$toast = {
    info: Toast.info,
    succeed: Toast.succeed,
    failed: Toast.failed,
    warn: Toast.warn,
    loading: Toast.loading
  };
  Vue.prototype.$notify = notify;

  Vue.prototype.$alert = Alert;
};

/* global VERSION */
const Cover = {
  install,
  version: VERSION
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Cover);
}

export default Cover;
