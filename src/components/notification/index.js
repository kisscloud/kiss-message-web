import './style.scss';
import Vue from 'vue';
import Notification from './notification.vue';
import NotificationList from './notification-list.vue';

const NotificationListCtor = Vue.extend(NotificationList);
const DEFAULT_OPTIONS = {
  id: 0,
  title: '',
  content: '',
  type: '',
  duration: 5000,
  closeable: false
};
let vm;
let seed = 0;

function notify(options) {
  seed++;

  if (typeof vm === 'undefined') {
    vm = new NotificationListCtor().$mount();
    document.body.appendChild(vm.$el);
  }

  if (typeof options === 'string') {
    options = {
      ...DEFAULT_OPTIONS,
      id: seed,
      title: options
    };
  } else if (typeof options === 'object') {
    options = {
      ...DEFAULT_OPTIONS,
      ...options,
      id: seed
    };
  }

  vm.add(options);
}

export { Notification, NotificationList, notify };
