<template>
  <c-popup
    class="modal-popup"
    :value="visible"
    :transition="transition"
    :mask="mask"
    :closeOnClickMask="closeOnClickMask"
    :placement="currentPlacement"
    @shown="$emit('shown')"
    @hidden="$emit('hidden')"
    @clickMask="handleClickMask"
  >
    <section class="modal" :class="modalClass" role="dialog">
      <header class="modal__header" v-if="$slots.header || title || closable">
        <slot name="header"></slot>
        <h4 class="modal__title" v-if="!$slots.header && title" v-html="title"></h4>
        <a role="button" class="modal__close" v-if="closable" @click="close">
          <i class="i-remove"></i>
        </a>
      </header>
      <div class="modal__body">
        <slot></slot>
      </div>
      <footer class="modal__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </section>
  </c-popup>
</template>

<script>
export default {
  name: 'c-modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md'
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
      default: false
    },
    className: {
      type: [String, Array, Object],
      default: ''
    },
    transition: {
      type: String,
      default() {
        switch (this.placement) {
          case 'right':
            return 'slideleft';
          case 'left':
            return 'slideright';
          case 'top':
            return 'slidedown';
          case 'center':
            return 'zoom';
          default:
            return 'fade';
        }
      }
    }
  },
  data() {
    return {
      visible: this.value
    };
  },
  computed: {
    currentPlacement() {
      if (['top', 'left', 'right', 'center'].indexOf(this.placement) !== -1) {
        return this.placement;
      } else {
        return 'center';
      }
    },
    modalClass() {
      const cls = {
        [`modal--${this.currentPlacement}`]: true
      };
      const parentClass = this.className;

      if (this.size) {
        cls[`modal--${this.size}`] = true;
      }

      if (typeof parentClass === 'string') {
        if (parentClass) {
          cls[parentClass] = true;
        }
      } else if (Array.isArray(parentClass)) {
        for (let i = 0, len = parentClass.length; i < len; i++) {
          if (parentClass[i]) {
            cls[parentClass[i]] = true;
          }
        }
      } else if (typeof parentClass === 'object') {
        Object.assign(cls, parentClass);
      }

      return cls;
    }
  },
  watch: {
    value(val) {
      if (val !== this.visible) {
        this.visible = val;
      }
    }
  },
  methods: {
    handleClickMask(e) {
      if (this.closeOnClickMask && this.visible) {
        this.close();
      }
      this.$emit('clickMask', e);
    },
    close() {
      this.visible = false;
      this.$emit('input', false);
    }
  }
};
</script>
