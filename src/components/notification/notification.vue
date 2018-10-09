<template>
  <div class="notification">
    <a role="button" class="notification__close" @click="close" v-if="closeable">
      <i class="i-remove"></i>
    </a>
    <div class="notification__media" v-if="type">
      <c-svgicon v-if="type === 'danger'" size="36" name="cross" fill="#f44336" />
      <c-svgicon v-else-if="type === 'success'" size="36" name="check" fill="#4caf50" />
      <c-svgicon v-else-if="type === 'info'" size="36" name="alert" fill="#2196f3" />
      <i :class="type" v-else />
    </div>
    <div class="notification__content">
      <div class="notification__title">{{title}}</div>
      <div class="notification__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-notification',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    closeable: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(this.close, this.duration);
    }
  },
  methods: {
    close() {
      if (this.duration) {
        clearTimeout(this.timer);
      }
      this.$emit('close');
    }
  }
};
</script>
