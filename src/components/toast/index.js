import './style.scss';
import Vue from 'vue';
import Toast from './toast.vue';
const ToastCtor = Vue.extend(Toast);

const generate = function({ icon = '', content = '', locked = false, duration = 2000 }) {
  // eslint-disable-next-line
  let timeout;
  const vm = new ToastCtor({
    propsData: {
      icon,
      content,
      locked
    }
  }).$mount();

  if (duration > 0) {
    timeout = setTimeout(() => {
      vm.hide();
    }, duration);
  }

  vm.$on('hidden', () => {
    vm.$destroy();
    document.body.removeChild(vm.$el);
  });

  document.body.appendChild(vm.$el);

  return vm;
};

Toast.info = (content = '', duration = 2000) => {
  return generate({
    icon: '',
    content,
    duration
  });
};

Toast.succeed = (content = '', duration = 2000) => {
  return generate({
    icon: 'check',
    content,
    duration
  });
};

Toast.failed = (content = '', duration = 2000) => {
  return generate({
    icon: 'cross',
    content,
    duration
  });
};

Toast.warn = (content = '', duration = 2000) => {
  return generate({
    icon: 'alert',
    content,
    duration
  });
};

Toast.loading = (content = '', duration = 0) => {
  return generate({
    icon: 'spin',
    content,
    duration,
    locked: true
  });
};

export default Toast;
