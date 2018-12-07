<template>
  <c-app :sider-open="$root.siderOpen">
    <c-sider>
      <c-brand class="u-bg-primary" slot="start">
        <!-- <img style="width: 30px;" src="../assets/logo-white.svg"> -->
        <span>{{title}}</span>
      </c-brand>
      <Navigation />
    </c-sider>
    <c-content>
      <c-header>
        <Navbar />
      </c-header>
      <c-body>
        <router-view></router-view>
      </c-body>
      <c-footer>
      </c-footer>
    </c-content>
  </c-app>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navigation,
    Navbar
  },
  data() {
    return {
      isLoading: false,
      title:
        (typeof window.config != 'undefined' && window.config.title) ||
        '有币支付管理后台'
    };
  }
};
</script>

<style lang="scss">
.app__brand {
  img {
    width: 15px !important;
    position: relative;
    top: -1px;
  }
  span {
    color: #fff;
    font-style: normal;
    font-size: 12px;
    margin-left: 7px;
  }
}
.el-message-box__wrapper {
  top: -30%;
}
</style>
