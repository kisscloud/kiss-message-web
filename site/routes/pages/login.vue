<template>
  <c-app>
    <c-content>
      <section class="sign u-m-auto">
        <div class="sign__body">
          <h1 class="sign__title">Cover</h1>
          <p class="sign__text">Login In with your administrator account</p>
          <c-form>
            <c-form-field label="Email">
              <c-form-input type="email"></c-form-input>
            </c-form-field>
            <c-form-field label="Password">
              <c-form-input type="password"></c-form-input>
            </c-form-field>
            <c-form-field>
              <c-level>
                <c-form-checkbox label="Remember me" slot="left"></c-form-checkbox>
                <router-link to="/forgot" slot="right">Forgot Password?</router-link>
              </c-level>
            </c-form-field>
            <c-button type="primary" @click.prevent="login" block>Login In</c-button>
          </c-form>
          <c-divider>OR</c-divider>
          <div class="u-text-center">
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
          </div>
        </div>
        <footer class="sign__footer u-text-center">
          <p>Not have an account? <router-link to="/register">Register</router-link></p>
          <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'LoginView',
  methods: {
    login() {
      this.$toast.loading('Login...', 2000);
      setTimeout(() => {
        this.$router.replace('/');
      }, 2300);
    }
  }
};
</script>
