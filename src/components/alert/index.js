import './style.scss';
import Vue from 'vue';
import AlertOptions from './alert';
const AlertCtor = Vue.extend(AlertOptions);
const noop = function() {};

const Alert = ({
  title = '',
  content = '',
  type = '',
  showCancel = false,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  onConfirm = noop,
  onCancel = noop
}) => {
  const vm = new AlertCtor({
    propsData: {
      title,
      content,
      type,
      showCancel,
      cancelText,
      confirmText,
      onConfirm,
      onCancel
    },
    data: {
      visible: false
    }
  }).$mount();

  vm.$on('hidden', () => {
    vm.$destroy();
    document.body.removeChild(vm.$el);
  });

  document.body.appendChild(vm.$el);
  vm.$nextTick(function() {
    this.visible = true;
  });

  return vm;
};

export default Alert;
