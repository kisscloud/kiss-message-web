export default {
  name: 'c-body',
  functional: true,
  render(h, { data, children }) {
    return (
      <c-scroll-view class="app__body" {...data}>
        {children}
      </c-scroll-view>
    );
  }
};
