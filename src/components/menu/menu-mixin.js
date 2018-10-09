export default {
  props: {
    index: {
      type: String
    }
  },
  computed: {
    rootMenu() {
      let parent = this;
      while (parent && parent.$options.name !== 'c-menu') {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu() {
      let parent = this;
      while (parent && parent.$options.name !== 'c-submenu') {
        parent = parent.$parent;
      }
      return parent;
    },
    indexPath() {
      const path = [this.index];
      let parent = this.$parent;
      while (parent.$options.name !== 'c-menu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    }
  }
};
