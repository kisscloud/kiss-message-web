export default {
  name: 'c-form-field',
  functional: true,
  render(h, { props, data, slots }) {
    const { label, help } = props;

    return (
      <div class="form-field" {...data}>
        {label ? <label class="form-label" domProps-innerHTML={label} /> : null}
        {slots().default}
        {help ? <small class="form-help">{help}</small> : null}
      </div>
    );
  }
};
