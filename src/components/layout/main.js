export default {
  name: 'c-main',
  functional: true,
  render(h, { data, children }) {
    return (
      <main role="main" class="app__main" {...data}>
        {children}
      </main>
    );
  }
};
