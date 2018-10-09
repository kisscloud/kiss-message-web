export default {
  name: 'c-form-group',
  functional: true,
  render(h, { data, slots }) {
    return (
      <div class="form-group" {...data}>
        {slots().default}
      </div>
    );
  }
};
