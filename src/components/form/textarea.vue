<template>
  <textarea class="form-textarea"
    :value="value"
    @input="onInput"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    :class="{
      [`is-${status}`]: !!status,
      'is-flat': flat
    }"
  ></textarea>
</template>

<script>
export default {
  name: 'c-form-textarea',
  props: {
    value: {
      default: ''
    },
    status: {
      type: String
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value, e);
    }
  }
};
</script>
