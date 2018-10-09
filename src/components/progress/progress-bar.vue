<template>
  <div class="progress" :class="wrapperClass">
    <div class="progress__bar" :style="barStyle"></div>
  </div>
</template>

<script>
const themes = ['primary', 'info', 'danger', 'warning', 'success'];
const sizes = ['sm', 'lg'];

export default {
  name: 'c-progress-bar',

  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    },
    size: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    rate() {
      return Math.abs(Math.round((parseFloat(this.value) / parseFloat(this.max)) * 1000) / 10);
    },
    wrapperClass() {
      const cls = [];
      if (themes.indexOf(this.type) !== -1) {
        cls.push(`progress--${this.type}`);
      }

      if (sizes.indexOf(this.size) !== -1) {
        cls.push(`progress--${this.size}`);
      }

      if (this.active) {
        cls.push('is-active');
      }

      return cls;
    },
    barStyle() {
      const style = {
        width: this.rate + '%'
      };

      if (themes.indexOf(this.type) === -1) {
        style['background-color'] = this.type;
      }

      return style;
    }
  }
};
</script>
