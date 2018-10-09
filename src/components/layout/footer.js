export default {
  name: 'c-footer',
  functional: true,
  render(h, { data, children }) {
    return (
      <footer class="app__footer" {...data}>
        {children}
      </footer>
    );
  }
};
