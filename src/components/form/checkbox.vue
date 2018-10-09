<template>
  <label class="form-checkbox">
    <input type="checkbox"
      :checked="checked"
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="form-checkbox__indicator"></span>
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'c-form-checkbox',
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
    onChange(e) {
      this.$emit('sync', e.target.checked);
    }
  }
};
</script>
