<template>
  <section class="codebox">
    <slot></slot>
    <a class="codebox__trigger" @click="open = true">Show Code</a>
    <c-modal title="Code" size="lg" v-model="open">
      <slot name="code"></slot>
    </c-modal>
  </section>
</template>

<script>
export default {
  name: 'CodeBox',

  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss">
.codebox {
  position: relative;
  &:hover {
    .codebox__trigger {
      opacity: 1;
    }
  }
}

.codebox__trigger {
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 15;
  transition: opacity 0.3s;
  will-change: opacity;
  &:hover {
    color: #fff;
  }
}
</style>
