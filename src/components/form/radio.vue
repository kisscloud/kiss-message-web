<template>
  <label class="form-radio">
    <input type="radio"
      v-bind="$attrs"
      :value="value"
      :checked="checked === value"
      @change="handleChange"
    />
    <span class="form-radio__indicator"></span>
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'c-form-radio',
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
      type: String,
      default: ''
    },
    value: {
      type: String
    }
  },
  methods: {
    handleChange(e) {
      if (e.target.checked) {
        this.$emit('sync', e.target.value);
      }
    }
  }
};
</script>
