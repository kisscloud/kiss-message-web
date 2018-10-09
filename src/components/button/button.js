import { mergeData } from '../../utils/helpers';

export default {
  name: 'c-button',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    iconStart: {
      type: String,
      default: ''
    },
    iconEnd: {
      type: String,
      default: ''
    },
    smart: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, slots }) {
    const { tag, type, outline, size, block, smart, active, iconStart, iconEnd } = props;
    let children = null;
    const content = slots().default;
    const wrapperCls = { btn: true };
    if (type) wrapperCls[`btn--${type}`] = true;
    if (size) wrapperCls[`btn--${size}`] = true;
    if (outline) wrapperCls['btn--outline'] = true;
    if (smart) wrapperCls['btn--smart'] = true;
    if (block) wrapperCls['btn--block'] = true;
    if (active) wrapperCls['is-active'] = true;

    if (iconStart || iconEnd) {
      if (content) {
        children = (
          <span class="i-text">
            {iconStart && <i class={iconStart} />}
            <span>{content}</span>
            {iconEnd && <i class={iconEnd} />}
          </span>
        );
      } else {
        children = <i class={iconStart || iconEnd} />;
      }
    } else {
      children = content;
    }

    return h(
      tag,
      mergeData(
        {
          class: wrapperCls
        },
        data
      ),
      [children]
    );
  }
};
