export default {
  name: 'c-sider',
  functional: true,
  render(h, { data, slots }) {
    const startSlot = slots().start;
    const contentSlot = slots().default;
    const endSlot = slots().end;
    return (
      <aside class="app__sider" {...data}>
        {startSlot ? <div class="app__sider__start">{startSlot}</div> : null}
        <div class="app__sider__content">{contentSlot}</div>
        {endSlot ? <div class="app__sider__end">{endSlot}</div> : null}
      </aside>
    );
  }
};
