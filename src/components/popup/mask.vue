<template>
  <transition name="fade"
    :duration="300"
  >
    <div class="mask" @click="onClick" v-if="visible"></div>
  </transition>
</template>

<script>
export default {
  name: 'c-mask',

  data() {
    return {
      visible: false
    };
  },

  mounted() {
    document.body.appendChild(this.$el);
  },
  beforeDestroy() {
    const parent = this.$el.parentNode;
    if (parent) {
      parent.removeChild(this.$el);
    }
  },

  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    },
    onClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>
