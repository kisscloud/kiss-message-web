<template>
  <li class="menu__item has-children" :class="{'is-open': isOpen, 'is-active': isActive}">
    <a role="button" class="menu__link" @click="onClick">
      <span v-if="icon || $slots.icon" class="menu__icon">
        <i :class="icon" v-if="!$slots.icon"></i>
        <slot name="icon"></slot>
      </span>
      <span class="menu__label" v-html="label"></span>
      <span class="menu__after" v-if="$slots.after">
        <slot name="after"></slot>
      </span>
    </a>
    <ul class="menu__sub">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import MenuMixin from './menu-mixin';

export default {
  name: 'c-submenu',
  mixins: [MenuMixin],
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isActive() {
      return this.rootMenu.currentIndexPath.indexOf(this.index) !== -1;
    }
  },
  methods: {
    onClick(e) {
      this.isOpen = !this.isOpen;
      this.$emit('click', e);
    }
  }
};
</script>
