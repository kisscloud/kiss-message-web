<template>
  <ul class="menu" :class="wrapperCls">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'c-menu',
  props: {
    activeIndex: {
      type: String,
      default: ''
    },
    theme: {
      type: String
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    activeIndex(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    }
  },
  data() {
    return {
      currentIndex: this.activeIndex,
      currentIndexPath: []
    };
  },
  computed: {
    wrapperCls() {
      return {
        'menu--mini': this.mini,
        [`menu--${this.theme}`]: !!this.theme
      };
    }
  },
  created() {
    this.rootMenu = this;
  },
  methods: {
    select(index) {
      this.currentIndex = index;
      this.$emit('select', this.currentIndex, this.currentIndexPath);
    }
  }
};
</script>
