export default {
  name: 'c-form-addon',
  functional: true,
  render(h, { data, slots }) {
    return (
      <span class="form-addon" {...data}>
        {slots().default}
      </span>
    );
  }
};
