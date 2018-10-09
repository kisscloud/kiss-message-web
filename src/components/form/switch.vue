<template>
  <label class="form-switch">
    <input type="checkbox"
      :checked="checked"
      v-bind="$attrs"
      @change="handleChange"
    />
    <span class="form-switch__indicator"></span>
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'c-form-switch',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'sync'
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('sync', e.target.checked);
    }
  }
};
</script>
