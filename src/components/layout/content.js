export default {
  name: 'c-content',
  functional: true,
  render(h, { data, children }) {
    return (
      <div class="app__content" {...data}>
        {children}
      </div>
    );
  }
};
