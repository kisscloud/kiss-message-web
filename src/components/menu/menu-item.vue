<template>
  <li class="menu__item">
    <a class="menu__link" v-bind="$attrs" :class="{'is-active': isActive}" @click="onClick">
      <span v-if="icon || $slots.icon" class="menu__icon">
        <i :class="icon" v-if="!$slots.icon"></i>
        <slot name="icon"></slot>
      </span>
      <span class="menu__label" v-html="label"></span>
      <span class="menu__after" v-if="$slots.default">
        <slot></slot>
      </span>
    </a>
  </li>
</template>

<script>
import MenuMixin from './menu-mixin';
export default {
  name: 'c-menu-item',
  mixins: [MenuMixin],
  inheritAttrs: false,
  props: {
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    label: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.active || this.rootMenu.currentIndex === this.index;
    }
  },
  watch: {
    isActive: {
      immediate: true,
      handler(val) {
        if (val) {
          this.rootMenu.currentIndexPath = this.indexPath;
        }
      }
    }
  },
  methods: {
    onClick(e) {
      if (this.index) {
        this.rootMenu.select(this.index);
      }
      this.$emit('click', e);
    }
  }
};
</script>
