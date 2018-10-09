export default {
  name: 'c-divider',
  functional: true,
  props: {
    placement: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, slots }) {
    let wrapperClass = ['divider'];
    switch (props.placement) {
      case 'start':
        wrapperClass.push('divider--start');
        break;
      case 'end':
        wrapperClass.push('divider--end');
        break;
      default:
        break;
    }

    if (props.vertical) {
      wrapperClass.push('divider--vertical');
    }

    return (
      <div class={wrapperClass.join(' ')} {...data}>
        <span>{slots().default}</span>
      </div>
    );
  }
};
