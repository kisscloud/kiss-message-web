import Vue from 'vue';
import MaskOpt from './mask.vue';
const MaskCtor = Vue.extend(MaskOpt);
const items = [];
let maskVM = null;

const showMask = () => {
  if (!maskVM) {
    maskVM = new MaskCtor().$mount();
    maskVM.$on('click', function(e) {
      for (let i = items.length - 1; i >= 0; i--) {
        items[i].$emit('clickMask', e);
      }
    });
  }

  maskVM.show();
};

const hideMask = () => {
  if (!maskVM) return;

  maskVM.hide();
};

const manager = {
  register(vm) {
    const index = items.indexOf(vm);
    if (index === -1) {
      items.push(vm);
      showMask();
      return items.length - 1;
    } else {
      return index;
    }
  },
  deregister(vm) {
    const index = items.indexOf(vm);
    if (index !== -1) {
      items.splice(index, 1);
      if (items.length === 0) {
        hideMask();
      }
    }
  }
};

export default manager;
