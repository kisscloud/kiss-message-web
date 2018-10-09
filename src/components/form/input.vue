<template>
  <div class="form-group" v-if="addonStart || addonEnd">
    <span class="form-addon" v-if="addonStart" v-html="addonStart"></span>
    <div class="form-control"
      :class="{
        'has-clear': clearable,
        'has-icon-start': iconStart,
        'has-icon-end': iconEnd
      }"
    >
      <i class="form-control__icon-start" :class="[iconStart]" v-if="iconStart"></i>
      <input class="form-input"
        v-bind="$attrs"
        :class="{
          [`form-input--${size}`]: !!size,
          [`is-${status}`]: !!status,
          'is-flat': flat
        }"
        :value="currentValue"
        @input="handleInput"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
        @change="$emit('change', $event)"
      />
      <i class="form-control__icon-end" :class="[iconEnd]" v-if="iconEnd"></i>
      <a role="button" class="form-control__clear" v-if="clearable && value" @click="clear">&times;</a>
    </div>
    <span class="form-addon" v-if="addonEnd" v-html="addonEnd"></span>
  </div>
  <div v-else class="form-control"
    :class="{
      'has-clear': clearable,
      'has-icon-start': iconStart,
      'has-icon-end': iconEnd
    }"
  >
    <i class="form-control__icon-start" :class="[iconStart]" v-if="iconStart"></i>
    <input class="form-input"
      v-bind="$attrs"
      :class="{
        [`form-input--${size}`]: !!size,
        [`is-${status}`]: !!status,
        'is-flat': flat
      }"
      :value="currentValue"
      @input="handleInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @change="$emit('change', $event)"
    />
    <i class="form-control__icon-end" :class="[iconEnd]" v-if="iconEnd"></i>
    <a role="button" class="form-control__clear" v-if="clearable && value" @click="clear">&times;</a>
  </div>
</template>

<script>
export default {
  name: 'c-form-input',
  inheritAttrs: false,
  props: {
    value: {
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    iconStart: {
      type: String,
      default: ''
    },
    iconEnd: {
      type: String,
      default: ''
    },
    addonStart: {
      type: String,
      default: ''
    },
    addonEnd: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    }
  },
  methods: {
    clear() {
      this.currentValue = '';
      this.$emit('input', this.currentValue);
    },
    handleInput(e) {
      this.currentValue = e.target.value;
      this.$emit('input', this.currentValue, e);
    }
  }
};
</script>
