import PopperJS from 'popper.js';
// @vue/component
export default {
  name: 'c-dropdown',

  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (val !== this.visible) {
          if (val) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    }
  },

  mounted() {
    document.body.appendChild(this.$refs.dropdown);
    const parent = this.$el.parentNode;
    const trigger = (this.$_trigger = this.$el.firstChild);
    parent.insertBefore(trigger, this.$el);
    parent.removeChild(this.$el);

    if (!this.$scopedSlots.trigger) {
      this.$_trigger.addEventListener('click', this.toggle);
    }
    document.addEventListener('click', this.$_onClickoutside);
  },

  beforeDestroy() {
    this.$_destroy();
    if (!this.$scopedSlots.trigger) {
      this.$_trigger.removeEventListener('click', this.toggle);
    }
    document.removeEventListener('click', this.$_onClickoutside);
    document.body.removeChild(this.$refs.dropdown);
  },

  methods: {
    toggle(e) {
      e.preventDefault();
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    },
    show() {
      this.visible = true;
      this.$refs.dropdown.style.display = 'block';
      this.$_update();
      this.$emit('input', true);
    },
    hide() {
      this.visible = false;
      this.$refs.dropdown.style.display = 'none';
      this.$emit('input', false);
    },
    $_create() {
      const refEl = this.$_trigger;
      const popperEl = this.$refs.dropdown;
      const options = {
        gpuAcceleration: false,
        placement: this.placement,
        modifiers: {
          offset: {
            offset: '0,4'
          }
        }
      };

      this.$_popperJS = new PopperJS(refEl, popperEl, options);
    },
    $_destroy() {
      if (this.$_popperJS) {
        this.$_popperJS.destroy();
        this.$_popperJS = null;
      }
    },
    $_update() {
      this.$_popperJS ? this.$_popperJS.update() : this.$_create();
    },
    $_onClickoutside(e) {
      if (!this.$_trigger.contains(e.target) && !this.$refs.dropdown.contains(e.target) && this.visible) {
        this.hide();
      }
    }
  },

  render(h) {
    let trigger;
    const content = this.$slots.content && this.$slots.content[0];

    if (this.$scopedSlots.trigger) {
      trigger = this.$scopedSlots.trigger({
        show: this.show,
        hide: this.hide
      });
    } else {
      trigger = this.$slots.default && this.$slots.default[0];
    }

    if (!content) {
      throw new Error('You must provide a child node with [slot="content"] as dropdown content');
    }

    const dropdown = h(
      'span',
      {
        style: {
          display: 'none',
          zIndex: 100
        },
        ref: 'dropdown'
      },
      [content]
    );

    return h('span', {}, [trigger, dropdown]);
  }
};
