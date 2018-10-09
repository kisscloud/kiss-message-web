<template>
  <div class="note" :class="wrapperCls">
    <a role="button" class="note__close" v-if="closeable" @click="close">
      <i class="i-remove"></i>
    </a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-note',
  props: {
    type: {
      type: String
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapperCls() {
      return {
        [`note--${this.type}`]: !!this.type,
        'has-close': this.closeable
      };
    }
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    close() {
      this.$emit('close');
      this.$destroy();
    }
  }
};
</script>
