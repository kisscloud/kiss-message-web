<template>
  <c-app>
    <c-content>
      <section class="sign u-m-auto">
        <div class="sign__body">
          <h1 class="sign__title u-fs-24">Forgot Your Password?</h1>
          <p class="sign__text">Input your registered email to reset your password</p>
          <c-form>
            <c-form-field label="Email">
              <c-form-input icon-start="icon-envelop3" type="email"></c-form-input>
            </c-form-field>
            <c-button type="danger" @click.prevent="forgot" block>Send Reset Link</c-button>
          </c-form>
        </div>
        <footer class="sign__footer u-text-center">
          <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'ForgotView',
  methods: {
    forgot() {
      this.$toast.loading('Sending...', 2000);
      setTimeout(() => {
        this.$router.replace('/reset');
      }, 2300);
    }
  }
};
</script>
