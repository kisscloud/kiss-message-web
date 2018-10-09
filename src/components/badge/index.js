import { mergeData } from '../../utils/helpers';

export default {
  name: 'c-badge',
  functional: true,
  props: {
    type: {
      type: String
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render(h, { props, data, slots }) {
    const { type, tag } = props;

    return h(
      tag,
      mergeData(
        {
          staticClass: 'badge',
          class: {
            [`badge--${type}`]: !!type
          }
        },
        data
      ),
      [slots().default]
    );
  }
};
