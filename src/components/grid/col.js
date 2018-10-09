import { mergeData } from '../../utils/helpers';

export default {
  name: 'c-col',
  functional: true,
  props: {
    order: {
      type: [String, Number]
    },
    span: {
      type: [String, Number]
    },
    xs: {
      type: [String, Number]
    },
    sm: {
      type: [String, Number]
    },
    md: {
      type: [String, Number]
    },
    lg: {
      type: [String, Number]
    },
    xl: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    xsOffset: {
      type: [String, Number]
    },
    smOffset: {
      type: [String, Number]
    },
    mdOffset: {
      type: [String, Number]
    },
    lgOffset: {
      type: [String, Number]
    },
    xlOffset: {
      type: [String, Number]
    }
  },
  render(h, { props, data, children }) {
    const wrapperCls = {};
    const style = {};

    // calc order
    if (props.order) {
      style.order = parseInt(props.order);
    }

    // calc sizes
    const span = Math.abs(props.span || props.xs);
    if (span) {
      wrapperCls[`l-col-${span}`] = true;
    } else if (!props.xs && !props.md && !props.lg && !props.xl) {
      wrapperCls['l-col'] = true;
    }
    // calc offset
    const offset = Math.abs(props.offset || props.xsOffset);
    if (offset) {
      wrapperCls[`l-col-offset-${offset}`] = true;
    }

    ['sm', 'md', 'lg', 'xl'].forEach(key => {
      if (props[key] || props[key] === '') {
        const size = Math.abs(props[key]);
        if (size === 0) {
          wrapperCls[`l-col@${key}`] = true;
        } else {
          wrapperCls[`l-col-${size}@${key}`] = true;
        }
      }
      if (props[`${key}Offset`]) {
        const offset = Math.abs(props[`${key}Offset`]);
        if (offset) {
          wrapperCls[`l-col-offset-${offset}@${key}`] = true;
        }
      }
    });

    return h(
      'div',
      mergeData(
        {
          class: wrapperCls,
          style
        },
        data
      ),
      children
    );
  }
};
