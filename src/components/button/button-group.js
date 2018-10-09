export default {
  name: 'c-button-group',
  functional: true,
  render(h, { slots, data }) {
    return (
      <div class="btn-group" {...data}>
        {slots().default}
      </div>
    );
  }
};
