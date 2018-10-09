import './style.scss';

export default {
  name: 'c-panel',
  functional: true,
  props: {
    title: {
      type: String
    },
    type: {
      type: String
    }
  },
  render(h, { props, data, slots }) {
    const { title, type } = props;
    const control = slots().control;
    const content = slots().default;
    const footer = slots().footer;
    const hasHeader = title || control;
    const wrapperCls = {
      panel: true,
      [`panel panel--${type}`]: !!type
    };
    return (
      <section class={wrapperCls} {...data}>
        {hasHeader ? (
          <header class="panel__header">
            <h2 class="panel__title" domPropsInnerHTML={title} />
            {control ? <div class="panel__control">{control}</div> : null}
          </header>
        ) : null}
        <div class="panel__body">{content}</div>
        {footer ? <footer class="panel__footer">{footer}</footer> : null}
      </section>
    );
  }
};
