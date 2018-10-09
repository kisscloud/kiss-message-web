<template functional>
  <li class="steps__item">
    <i class="steps__indicator"></i>
    <h4 class="steps__title" v-text="props.title"></h4>
    <p class="steps__desc" v-if="props.desc" v-text="props.desc"></p>
  </li>
</template>

<script>
export default {
  name: 'c-steps-item',
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  }
};
</script>
