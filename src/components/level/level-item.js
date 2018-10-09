export default {
  name: 'c-level-item',
  functional: true,
  render(h, { data, slots }) {
    return (
      <div class="l-level__item" {...data}>
        {slots().default}
      </div>
    );
  }
};
