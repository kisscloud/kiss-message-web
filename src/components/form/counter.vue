<template>
  <div class="form-group form-counter">
    <button
      class="form-addon form-counter__btn"
      :disabled="disabled || (min && count <= min)"
      @click="decrease"
    >-</button>
    <input
      class="form-input form-counter__input"
      v-model.number="count"
      :disabled="disabled"
      :readonly="!editable"
    />
    <button
      class="form-addon form-counter__btn"
      :disabled="disabled || (max && count >= max)"
      @click="increase"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'c-form-counter',
  props: {
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1,
      validator(val) {
        return val > 0;
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    },
    editable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      count: 0
    };
  },
  watch: {
    value(newVal) {
      if (newVal !== this.count) {
        this.count = newVal;
      }
    },
    count(newVal, oldVal) {
      if (this.max && newVal >= this.max) {
        this.count = this.max;
      } else if (this.min && newVal <= this.min) {
        this.count = this.min;
      }

      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    }
  },
  methods: {
    increase() {
      if (this.disabled) return;

      if (!this.max || this.count < this.max) {
        this.count += this.step;
      }
    },
    decrease() {
      if (this.disabled) return;

      if (!this.min || this.count > this.min) {
        this.count -= this.step;
      }
    }
  }
};
</script>
