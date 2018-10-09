<template>
  <span class="tag" :class="wrapperClass" @click="handleClick">
    <span>
      <slot></slot>
    </span>
    <a v-if="closable" class="tag__close" @click="handleClose"></a>
  </span>
</template>

<script>
export default {
  name: 'c-tag',
  props: {
    type: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.checked = val;
      }
    }
  },
  computed: {
    wrapperClass() {
      const classes = {};

      if (this.checkable === '' || this.checkable) {
        classes[`tag--clickable`] = true;
        if (!this.checked) return classes;
      }

      if (this.type) {
        classes[`tag--${this.type}`] = true;
      }

      return classes;
    }
  },
  methods: {
    handleClose(e) {
      e.stopPropagation();
      this.$emit('close');
    },
    handleClick() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
  }
};
</script>
