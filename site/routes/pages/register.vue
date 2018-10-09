<template>
  <c-app>
    <c-content>
      <section class="sign u-m-auto">
        <div class="sign__body">
          <header class="sign__header">
            <h1 class="sign__title">Cover</h1>
            <p class="sign__text">Register to your app account</p>
          </header>
          <c-form>
            <c-form-field label="Name">
              <c-form-input type="text"></c-form-input>
            </c-form-field>
            <c-form-field label="Email">
              <c-form-input type="email"></c-form-input>
            </c-form-field>
            <c-form-field label="Password">
              <c-form-input type="password"></c-form-input>
            </c-form-field>
            <c-form-field label="Repeat Password">
              <c-form-input type="password"></c-form-input>
            </c-form-field>
            <c-button type="primary" @click.prevent="register" block>Register</c-button>
          </c-form>
          <c-divider>OR</c-divider>
          <div class="u-text-center">
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
          </div>
        </div>
        <footer class="sign__footer u-text-center">
          <p>Already have an account? <router-link to="/login">Login in</router-link></p>
          <p class="u-text-muted u-fs-12">Dashboard UI kit by 20Theme<br>© 2017-2018. All RIGHT RESERVED.</p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'RegisterView',
  methods: {
    register() {
      this.$toast.loading('Wait...', 2000);
      setTimeout(() => {
        this.$router.replace('/login');
      }, 2300);
    }
  }
};
</script>
