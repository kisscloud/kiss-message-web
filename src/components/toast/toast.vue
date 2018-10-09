<template>
  <div class="toast" :class="{'is-locked': locked}">
    <transition name="fade" @afterLeave="handleAfterLeave" appear>
    <div class="toast__content" v-show="visible">
      <template v-if="icon">
        <i class="toast__spin" v-if="icon === 'spin'"></i>
        <c-svgicon size="48" :name="icon" v-else />
      </template>
      <div v-if="$slots.default || content" class="toast__text">
        {{this.content}}
        <slot></slot>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'c-toast',

  props: {
    icon: {
      type: String
    },
    content: {
      type: String
    },
    locked: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    handleAfterLeave() {
      this.$emit('hidden');
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
