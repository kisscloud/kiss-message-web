export default {
  name: 'c-app',
  functional: true,
  props: {
    siderType: {
      type: String
    },
    siderOpen: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, children }) {
    const wrapperClass = {
      app: true,
      'has-mini-sider': props.siderType === 'mini',
      'is-sider-open': props.siderOpen
    };
    return (
      <div class={wrapperClass} {...data}>
        {children}
      </div>
    );
  }
};
