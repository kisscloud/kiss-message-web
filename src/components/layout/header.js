export default {
  name: 'c-header',
  functional: true,
  render(h, { data, children }) {
    return (
      <header class="app__header" {...data}>
        {children}
      </header>
    );
  }
};
