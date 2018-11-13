import 'core-js/fn/promise';
import 'core-js/fn/array';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Cover from 'cover';
import routes from './routes';
import ElementUI from 'element-ui';
import toast from "izitoast";
import 'izitoast/dist/css/izitoast.min.css';
import './styles/global.scss';
import permissions from './permissions';
import can from '../src/services/can';
import auth from '../src/auth';

// auth();

setInterval(() => {
  // auth();
}, 1500);

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Cover);
Vue.use(can);

window.toast = toast;

// 定义权限校验函数
const router = new VueRouter({
  mode: 'hash',
  routes
});

Vue.prototype.$auth = permissions;

const app = new Vue({
  data: {
    siderOpen: false
  },
  router,
  render(h) {
  return <router-view/> ;
  }
}).$mount('#app');

let pageLoader = null;
let pageLoaderTimeout = null;

const later = () => {
  if (!pageLoader) {
    pageLoader = app.$toast.loading();
  }
  pageLoaderTimeout = null;
};

const showPageLoader = () => {
  clearTimeout(pageLoaderTimeout);
  pageLoaderTimeout = setTimeout(later, 200);
};

const hidePageLoader = () => {
  clearTimeout(pageLoaderTimeout);
  pageLoaderTimeout = null;
  if (pageLoader) {
    pageLoader.hide();
    pageLoader = null;
  }
};

router.beforeEach((to, from, next) => {
  
  showPageLoader();
  next();
});

router.beforeResolve((to, from, next) => {
  hidePageLoader();
  next();
});
