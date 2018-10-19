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

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Cover);

window.toast = toast;

const router = new VueRouter({
  mode: 'hash',
  routes
});

const app = new Vue({
  // eslint-disable-line no-unused-vars
  data: {
    siderOpen: false
  },
  router,
  render(h) {
    return <router-view />;
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
