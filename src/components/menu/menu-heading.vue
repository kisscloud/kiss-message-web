<template functional>
  <li class="menu__heading">
    <span v-html="props.label"></span>
    <span class="menu__action">
      <slot></slot>
    </span>
  </li>
</template>

<script>
export default {
  name: 'c-menu-heading',
  props: {
    label: {
      type: String
    }
  }
};
</script>
