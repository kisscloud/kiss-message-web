<template>
  <div class="form-control flatpickr"
    :class="{
      'has-clear': clearable,
      'has-icon-start': icon,
    }"
  >
    <i class="form-control__icon-start" :class="icon" v-if="icon" data-toggle></i>
    <input type="text" class="form-input" :placeholder="placeholder" :disabled="disabled" @input="onInput" data-input />
    <a role="button" class="form-control__clear" v-if="clearable && value" data-clear>&times;</a>
  </div>
</template>

<script>
import Flatpickr from "flatpickr";
Flatpickr.localize({
  rangeSeparator: " → "
});

const hooks = [
  "onChange",
  "onClose",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onYearChange"
];

const camelToKebab = string => {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const arrayify = obj => {
  return obj instanceof Array ? obj : [obj];
};

const dateValidator = value => {
  return (
    value === null ||
    value instanceof Date ||
    typeof value === 'string' ||
    value instanceof String ||
    value instanceof Array ||
    typeof value === 'number'
  )
}

export default {
  name: "c-flatpickr",
  props: {
    value: {
      default: null,
      validator: dateValidator
    },
    min: {
      default: null,
      validator: dateValidator
    },
    max: {
      default: null,
      validator: dateValidator
    },
    withTime: {
      type: Boolean,
      default: false
    },
    onlyTime: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ""
    },
    inline: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default() {
        if (this.onlyTime) {
          return "H:i"
        } else {
          return "Y-m-d"
        }
      }
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    min(val) {
      this.pickerJS.set("minDate", val);
    },
    max(val) {
      this.pickerJS.set("maxDate", val);
    },
    value(val) {
      if (val === this.$el.value) return;
      this.pickerJS && this.pickerJS.setDate(val, true);
    },
  },
  mounted() {
    if (this.pickerJS) return;

     const config = {
      defaultDate: this.value,
      allowInput: !this.readonly,
      dateFormat: this.format,
      mode: this.range ? "range" : this.multiple ? "multiple" : "single",
      time_24hr: true,
      enableTime: this.withTime || this.onlyTime,
      noCalendar: this.onlyTime,
      maxDate: this.max,
      minDate: this.min,
      inline: this.inline,
      ...this.config,
      wrap: true
    };

    hooks.forEach(hook => {
      config[hook] = arrayify(this.config[hook] || []).concat((...args) => {
        this.$emit(camelToKebab(hook), ...args);
      });
    });

    this.pickerJS = new Flatpickr(this.$el, config);
  },
  watch: {
    config: {
      deep: true,
      handler(newConfig) {
         const config = {
          defaultDate: this.value,
          allowInput: !this.readonly,
          dateFormat: this.format,
          mode: this.range ? "range" : this.multiple ? "multiple" : "single",
          time_24hr: true,
          enableTime: this.withTime || this.onlyTime,
          noCalendar: this.onlyTime,
          maxDate: this.max,
          minDate: this.min,
          inline: this.inline,
          ...this.config,
          wrap: true
        };
        this.pickerJS.set(config);
      }
    },
    value(newValue) {
      if (newValue === this.$el.value) return
      this.pickerJS && this.pickerJS.setDate(newValue, true)
    }
  },
  beforeDestroy() {
    if (this.pickerJS) {
      this.pickerJS.destroy();
      this.pickerJS = null;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

