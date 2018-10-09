export default {
  name: 'c-brand',
  functional: true,
  render(h, { data, children }) {
    return (
      <div class="app__brand" {...data}>
        {children}
      </div>
    );
  }
};
