<template>
  <div class="progress-circle" :style="wrapperStyle">
    <svg viewBox="0 0 100 100">
      <path :d="pathString" :stroke="bg" :stroke-width="lineWidth" :fill-opacity="0"/>
      <path :d="pathString" :stroke-linecap="lineCap" :stroke="strokeColor" :stroke-width="lineWidth" fill-opacity="0" :style="pathStyle"/>
    </svg>
    <div class="progress-circle__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { filterColor } from '../../utils/helpers';

export default {
  name: 'c-progress-circle',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    },
    size: {
      type: [String, Number],
      default: 75
    },
    type: {
      type: String,
      default: 'primary'
    },
    bg: {
      type: String,
      default: '#e5e5e5'
    },
    lineWidth: {
      type: [String, Number],
      default: 6
    },
    lineCap: {
      default: 'round' // round, square
    }
  },
  computed: {
    wrapperStyle() {
      let size = 75;

      if (this.size === 'lg') {
        size = 120;
      } else if (this.size === 'sm') {
        size = 40;
      } else if (!isNaN(parseFloat(this.size))) {
        size = parseFloat(this.size);
      }

      return {
        width: `${size}px`,
        height: `${size}px`
      };
    },
    strokeColor() {
      return filterColor(this.type);
    },
    radius() {
      return 50 - parseFloat(this.lineWidth) / 2;
    },
    pathString() {
      return `M 50,50 m 0,-${this.radius}
          a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
          a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },
    len() {
      return Math.PI * 2 * this.radius;
    },
    rate() {
      return Math.abs(Math.round((parseFloat(this.value) / parseFloat(this.max)) * 1000) / 10);
    },
    pathStyle() {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - this.rate) / 100) * this.len}px`,
        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      };
    }
  }
};
</script>
