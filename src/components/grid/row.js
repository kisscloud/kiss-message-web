import { mergeData } from '../../utils/helpers';

export default {
  name: 'c-row',
  functional: true,
  props: {
    gutter: {
      type: [String, Number],
      default: -1
    },
    align: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    card: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, children, slots }) {
    const gutter = parseFloat(props.gutter);
    const align = ['top', 'middle', 'bottom', 'stretch'].indexOf(props.align) !== -1 ? props.align : '';
    const justify = ['start', 'end', 'center', 'around', 'between'].indexOf(props.justify) !== -1 ? props.justify : '';
    const style = {};

    const colMap = col => {
      if (!col.fnOptions || col.fnOptions.name !== 'c-col') return col;

      col.data = mergeData(col.data, {
        style: {
          paddingLeft: `${gutter}px`,
          paddingRight: `${gutter}px`
        }
      });

      return col;
    };

    if (gutter >= 0) {
      style.marginLeft = `-${gutter}px`;
      style.marginRight = `-${gutter}px`;
    }

    return h(
      'div',
      mergeData(
        {
          staticClass: 'l-row',
          class: {
            [`is-${justify}`]: !!justify,
            [`is-${align}`]: !!align,
            'is-card': props.card
          },
          style
        },
        data
      ),
      gutter >= 0 ? children.map(colMap) : children
    );
  }
};
