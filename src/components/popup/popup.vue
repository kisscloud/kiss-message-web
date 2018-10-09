<template>
  <div class="popup" :class="wrapperClass" v-show="visible || isAnimating">
    <transition
      :name="transition"
      :duration="400"
      @beforeEnter="onBeforeEnter"
      @afterEnter="onAfterEnter"
      @enterCancelled="onEnterCanceled"
      @beforeLeave="onBeforeLeave"
      @afterLeave="onAfterLeave"
      @leaveCancelled="onLeaveCancelled"
    >
      <span v-show="visible">
        <slot></slot>
      </span>
    </transition>
  </div>
</template>

<script>
import manager from './manager';

export default {
  name: 'c-popup',

  props: {
    value: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'center'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'fade'
    }
  },

  data() {
    return {
      visible: false,
      isAnimating: false
    };
  },

  computed: {
    wrapperClass() {
      return {
        [`is-${this.placement}`]: !!this.placement
      };
    }
  },

  watch: {
    value(val) {
      if (val !== this.visible) {
        this.visible = val;
      }
    },
    visible(val) {
      this.$emit('input', val);
    }
  },

  mounted() {
    document.body.appendChild(this.$el);
    this.$on('clickMask', function() {
      if (this.closeOnClickMask && this.visible) {
        this.hide();
      }
    });
  },

  beforeDestroy() {
    manager.deregister(this);
    document.body.removeChild(this.$el);
  },

  methods: {
    onBeforeEnter() {
      this.isAnimating = true;
      if (this.mask) {
        manager.register(this);
      }
    },
    onAfterEnter() {
      this.isAnimating = false;
    },
    onEnterCanceled() {
      this.isAnimating = false;
      manager.deregister(this);
    },
    onBeforeLeave() {
      this.isAnimating = true;
      manager.deregister(this);
    },
    onAfterLeave() {
      this.isAnimating = false;
    },
    onLeaveCancelled() {
      this.isAnimating = false;
      if (this.mask) {
        manager.register(this);
      }
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    }
  }
};
</script>
