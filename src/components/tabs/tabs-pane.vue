<template>
  <section class="tabs__pane" v-show="isActive" role="tabpanel">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'c-tabs-pane',

  props: {
    label: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isActive() {
      return this.$parent.currentName === this.name;
    }
  },

  created() {
    this.$parent.addPane(this);
  }
};
</script>
