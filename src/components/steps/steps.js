export default {
  name: 'c-steps',
  props: {
    current: {
      type: [String, Number],
      default: 0
    },
    status: {
      type: String
    }
  },
  render(h) {
    const activeIndex = parseFloat(this.current);
    let index = 1;
    return (
      <ul class="steps">
        {this.$slots.default.reduce((group, item) => {
          if (item.fnOptions && item.fnOptions.name === 'c-steps-item') {
            item.data['class'] = item.data['class'] = {};
            item.data['class']['is-active'] = index <= activeIndex;
            item.data['class']['is-error'] = index === activeIndex && this.status === 'error';
            item.data['class']['is-warning'] = index === activeIndex && this.status === 'warning';
            group.push(item);
            index++;
          }
          return group;
        }, [])}
      </ul>
    );
  }
};
