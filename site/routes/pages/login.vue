<template>
  <c-app id="page-login">
    <c-content>
      <section class="sign u-m-auto">
        <h1 class="sign__title">Kiss Console</h1>
        <div class="sign__body">
          <!-- <h1 class="sign__title">KISS Console</h1> -->
          <!-- <p class="sign__text">Login In with your administrator account</p> -->
          <c-form>
            <c-form-field label="用户名">
              <c-form-input v-model="form.username" type="text"></c-form-input>
            </c-form-field>
            <c-form-field label="密码">
              <c-form-input v-model="form.password" type="password"></c-form-input>
            </c-form-field>
            <c-form-field>
              <c-level>
                <c-form-checkbox label="记住我" slot="left"></c-form-checkbox>
                <router-link to="/auth/forgot" slot="right">忘记密码？</router-link>
              </c-level>
            </c-form-field>
            <c-button type="primary" @click.prevent="login" block>登录</c-button>
          </c-form>
          <!-- <c-divider>OR</c-divider>
          <div class="u-text-center">
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
          </div> -->
        </div>
        <footer class="sign__footer u-text-center">
          <!-- <p>没有账户？ <router-link to="/register">admin@qq.com</router-link></p> -->
          <p class="u-text-muted u-fs-12">LD Capital © 2017-2018. All RIGHT RESERVED.</p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
import * as api from './../../../src/api';
import * as codes from './../../../src/codes';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      if (this.form.username == '') {
        this.$message({
          message: '用户名不能为空',
          type: 'warning'
        });
        return;
      }
      if (this.form.password == '') {
        this.$message({
          message: '密码不能为空',
          type: 'warning'
        });
        return;
      }

      let res = await api.AuthLogin(this.form);
      if (res.code === codes.Success) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('expiredAt', res.data.expiredAt);
        this.$router.push({ path: '/' });
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .sign {
    top: -140px;
  }
  .sign__title {
    font-size: 22px;
  }
  .sign__footer {
    /* margin-top: 16px; */
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
  }
}
</style>

