<template>
  <select
    class="form-select"
    :class="wrapperCls"
    :multiple="multiple"
    @change="handleChange"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      v-text="item.label"
    ></option>
  </select>
</template>

<script>
const getSelectValues = select => {
  const result = [];
  const options = select.options;
  for (let i = 0, len = options.length; i < len; i++) {
    if (options[i].selected) {
      result.push(options[i].value || options[i].text);
    }
  }

  return result;
};

const setSelectValues = (select, values) => {
  const options = select.options;
  for (let i = 0, len = options.length; i < len; i++) {
    if (values.indexOf(options[i].value) !== -1) {
      options[i].selected = true;
    } else {
      options[i].selected = false;
    }
  }
};

export default {
  name: 'c-form-select',
  props: {
    value: {
      type: [String, Array]
    },
    options: {
      type: Array,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      default: false
    },
    status: {
      type: String
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
    wrapperCls() {
      return {
        [`form-input--${this.size}`]: !!this.size,
        [`is-${this.status}`]: !!this.status
      };
    }
  },
  watch: {
    value(val) {
      if (val !== this.selected) {
        this.updateSelect();
      }
    }
  },
  mounted() {
    this.updateSelect();
  },
  methods: {
    updateSelect() {
      if (Array.isArray(this.value)) {
        setSelectValues(this.$el, this.value);
      } else {
        this.$el.value = this.value;
      }
    },
    handleChange(e) {
      if (this.multiple) {
        this.selected = getSelectValues(this.$el);
      } else {
        this.selected = e.target.value;
      }
      this.$emit('input', this.selected);
      this.$emit('change', e);
    }
  }
};
</script>
