import Tooltip from './lib/tooltip.js';

const positions = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end'
];

const tirggers = ['hover', 'click', 'focus'];

const defaults = {
  placement: 'top',
  container: 'body',
  delay: 0,
  html: true,
  template: `
    <div class="tooltip" role="tooltip">
      <div class="tooltip__arrow"></div>
      <div class="tooltip__inner"></div>
    </div>`,
  title: '',
  trigger: 'hover',
  offset: '0,4'
};

export default {
  name: 'tooltip',
  bind(el, binding, vnode) {
    const { arg = 4, value = '', modifiers } = binding;
    const options = {
      ...defaults,
      title: value,
      offset: `0,${arg}`,
      placement: getPlacement(modifiers),
      trigger: getTrigger(modifiers)
    };
    el.__tooltip__ = new Tooltip(el, options);
  },
  update(el, binding, vnode, oldVnode) {
    const { value, oldValue } = binding;
    if (value !== oldValue && el.__tooltip__) {
      el.__tooltip__.updateTitleContent(value);
    }
  },
  unbind(el, binding, vnode) {
    el.__tooltip__ && el.__tooltip__.dispose();
  }
};

/**
 * Get placement from modifiers
 * @param {Object} modifiers
 * @return {String} placement
 */
function getPlacement(modifiers = {}) {
  const keys = Object.keys(modifiers);
  let placement = 'top';

  for (let i = keys.length - 1; i >= 0; i--) {
    if (positions.indexOf(keys[i]) !== -1) {
      placement = keys[i];
      break;
    }
  }

  return placement;
}

/**
 * Get trigger from modifiers
 * @param {Object} modifiers
 * @return {String} trigger
 */
function getTrigger(modifiers = {}) {
  const keys = Object.keys(modifiers);
  let trigger = 'hover';

  for (let i = keys.length - 1; i >= 0; i--) {
    if (tirggers.indexOf(keys[i]) !== -1) {
      trigger = keys[i];
      break;
    }
  }

  return trigger;
}
