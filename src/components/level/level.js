export default {
  name: 'c-level',
  functional: true,
  render(h, { data, slots }) {
    const centerSlot = slots().center;
    const leftSlot = slots().left;
    const rightSlot = slots().right;
    const defaultSlot = slots().default;

    return (
      <div class="l-level" {...data}>
        {centerSlot ? <div class="l-level__center">{centerSlot}</div> : null}
        {leftSlot ? <div class="l-level__left">{leftSlot}</div> : null}
        {rightSlot ? <div class="l-level__right">{rightSlot}</div> : null}
        {defaultSlot}
      </div>
    );
  }
};
