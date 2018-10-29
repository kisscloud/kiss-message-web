<template>
  <c-app id="page-login">
    <c-content>
      <section class="sign u-m-auto">
        <h1 class="sign__title">统一账户中心</h1>
          <p class="sign__text">Kiss Cloud</p>
        <div class="sign__body">
          <!-- <h1 class="sign__title">Kiss Console</h1> -->
          <!-- <p class="sign__text">统一授权中心</p> -->
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
        clientId: '',
        username: '',
        password: ''
      },
      source: null
    };
  },
  mounted() {
    this.form.clientId = this.$route.query.client_id;
    this.source = this.$route.query.source;
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
        if (this.source) {
          window.location.href = this.getRedirectSource(
            res.data.authorizationCode
          );
        } else {
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('accessTokenExpiredAt', res.data.expiredAt);
          this.$router.push({ path: '/' });
        }
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    },
    getRedirectSource(authorizationCode) {
      let source = this.source;
      if (source.indexOf('?') !== '-1') {
        return `${source}?authorizationCode=${authorizationCode}`;
      }

      return `${source}&authorizationCode=${authorizationCode}`;
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

