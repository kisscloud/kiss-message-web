<template>
  <c-app>
    <c-content>
      <section class="sign u-m-auto">
        <div class="sign__body">
          <h1 class="sign__title u-fs-24">重置密码</h1>
          <c-form action="/login" method="GET">
            <c-form-field>
              <c-form-input icon-start="icon-lock" type="password" placeholder="New Password"></c-form-input>
            </c-form-field>
            <c-button type="danger" @click.prevent="reset" block>Reset Password</c-button>
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
    reset() {
      this.$toast.loading('Wait...', 2000);
      setTimeout(() => {
        this.$router.replace('/login');
      }, 2300);
    }
  }
};
</script>
