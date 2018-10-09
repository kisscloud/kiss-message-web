<template>
  <c-app>
    <c-content>
      <section class="message u-m-auto">
        <div class="message__media">
          <h1 class="u-fs-128">404</h1>
        </div>
        <p class="message__title">OOPS!</p>
        <p class="message__content">
          Sorry! The page you are looking for doesn't exist.
        </p>
        <c-button type="primary" size="lg" @click.prevent="goHome" smart>Go Home!</c-button>
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
