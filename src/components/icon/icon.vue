<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :width="currentSize"
    :height="currentSize"
    viewBox="0 0 64 64"
  >
    <template v-if="name === 'alert'">
      <path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm4 50h-8v-8h8v8zm0-15h-8V15h8v20z" fill-rule="nonzero"/>
    </template>
    <template v-else-if="name === 'check'">
      <path d="M32 0C14.329 0 0 14.329 0 32s14.329 32 32 32 32-14.329 32-32S49.671 0 32 0zm15.86 21.51l-19.202 25c-.151.154-.4.49-.704.49-.317 0-.524-.224-.704-.406-.179-.182-10.891-10.63-10.891-10.63l-.207-.21a.829.829 0 0 1-.152-.449c0-.168.069-.322.152-.448.055-.056.096-.098.152-.168 1.063-1.134 3.216-3.431 3.354-3.571.18-.182.331-.42.663-.42.345 0 .566.294.731.462.166.168 6.212 6.064 6.212 6.064l15.364-20.028a.781.781 0 0 1 .484-.196c.179 0 .345.07.483.182l4.224 3.375c.11.14.18.309.18.49a.733.733 0 0 1-.139.463z" fill-rule="nonzero"/>
    </template>
    <template v-else-if="name === 'cross'">
      <path d="M32 0C14.24 0 0 14.24 0 32c0 17.76 14.24 32 32 32 17.76 0 32-14.24 32-32C64 14.24 49.76 0 32 0zm16 43.52L43.52 48 32 36.48 20.48 48 16 43.52 27.52 32 16 20.48 20.48 16 32 27.52 43.52 16 48 20.48 36.48 32 48 43.52z" fill-rule="nonzero"/>
    </template>
    <template v-else-if="name === 'minus'">
      <path d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0zm16 35H16v-6h32v6z" fill-rule="nonzero"/>
    </template>
  </svg>
</template>

<script>
export default {
  name: 'c-svgicon',
  props: {
    name: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 'md'
    }
  },
  computed: {
    currentSize() {
      let currentSize = 64;
      switch (this.size) {
        case 'xs':
          currentSize = 16;
          break;
        case 'sm':
          currentSize = 32;
          break;
        case 'md':
          currentSize = 64;
          break;
        case 'lg':
          currentSize = 96;
          break;
        case 'xl':
          currentSize = 128;
          break;
        default:
          currentSize = parseFloat(this.size);
          break;
      }
      return currentSize;
    }
  }
};
</script>
