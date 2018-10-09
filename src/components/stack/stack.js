export default {
  name: 'c-stack',
  functional: true,
  props: {
    row: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, slots }) {
    const wrapperClass = {
      'l-stack': true,
      'l-stack--row': props.row
    };
    const startSlot = slots().start;
    const endSlot = slots().end;
    const contentSlot = slots().default;

    return (
      <div class={wrapperClass} {...data}>
        {startSlot ? <div class="l-stack__start">{startSlot}</div> : null}
        <div class="l-stack__content">{contentSlot}</div>
        {endSlot ? <div class="l-stack__end">{endSlot}</div> : null}
      </div>
    );
  }
};
