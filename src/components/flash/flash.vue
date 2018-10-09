<template>
  <div class="flash" :class="wrapperCls">
    <a role="button" class="flash__close" @click="close">
      <i class="i-remove"></i>
    </a>
    <div class="flash__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-flash',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    wrapperCls() {
      return {
        [`flash--${this.type}`]: !!this.type
      };
    }
  },
  methods: {
    close() {
      this.$emit('close');
      this.$destroy();
    }
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  }
};
</script>
