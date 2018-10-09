<template>
  <c-modal
    :className="['modal--alert', !!type ? `is-${type}` : null]"
    v-model="visible"
    :closable="false"
    @hidden="handleHidden"
  >
    <h4 class="modal__title" v-if="title" slot="header">
      <c-svgicon v-if="icon" :name="icon" size="xs" />{{title}}
    </h4>
    {{content}}
    <div class="u-text-right" slot="footer">
      <c-button v-if="showCancel" @click="handleClickCancel">{{cancelText}}</c-button>
      <c-button type="primary" smart @click="handleClickConfirm">{{confirmText}}</c-button>
    </div>
  </c-modal>
</template>

<script>
export default {
  name: 'c-alert',
  props: {
    title: String,
    content: String,
    type: String,
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    confirmText: {
      type: String,
      default: 'Confirm'
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'info':
          return 'alert';
        case 'error':
          return 'cross';
        case 'success':
          return 'check';
        case 'warning':
          return 'minus';
        default:
          return '';
      }
    }
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    handleHidden() {
      this.$emit('hidden');
    },
    handleClickCancel() {
      if (this.onCancel() !== false) {
        this.hide();
      }
    },
    handleClickConfirm() {
      if (this.onConfirm() !== false) {
        this.hide();
      }
    }
  }
};
</script>
