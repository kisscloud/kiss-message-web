export default {
  name: 'c-box',
  functional: true,
  props: {
    type: {
      type: String
    },
    title: {
      type: String
    }
  },
  render(h, { props, data, slots }) {
    const { type, title } = props;
    const wrapperCls = {
      box: true,
      [`box--${type}`]: !!type
    };
    return (
      <div class={wrapperCls} {...data}>
        <header class="box__header">{slots().header || title}</header>
        <div class="box__body">{slots().default}</div>
      </div>
    );
  }
};
