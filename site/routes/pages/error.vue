<template>
  <c-app>
    <c-content>
      <section class="message u-m-auto">
        <div class="message__media">
          <h1 class="u-fs-128">404</h1>
        </div>
        <p class="message__title">OOPS!</p>
        <p class="message__content">
          页面不存在
        </p>
        <!-- <c-button type="primary" size="lg" @click.prevent="goHome" smart>回到主页</c-button> -->
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {  
  name: 'ErrorView',
  methods: {
    goHome() {
      this.$router.replace('/');
    }
  }
};
</script>
