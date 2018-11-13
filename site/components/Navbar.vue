<template>
  <nav class="navbar navbar--light">
    <div class="navbar__start">
      <a class="navbar__item u-hidden-up@lg" @click="toggleSider">
        <i class="i-menu i-menu--light"></i>
      </a>
    </div>
    <div class="navbar__end">
      <c-dropdown placement="bottom-end">
        <div class="navbar__item">
          <a role="button" class="account">
            <figure class="account__media">
              <img class="avatar" :src="'static/images/avatar.png'" alt="">
            </figure>
            <div class="account__after">
              <i class="i-caret i-caret--light"></i>
            </div>
          </a>
        </div>
        <c-dropmenu slot="content">
          <c-dropmenu-item title="安全中心" />
          <c-dropmenu-divider />
          <c-dropmenu-item @click="logout()" title="退出" />
        </c-dropmenu>
      </c-dropdown>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      version: VERSION
    };
  },
  methods: {
    toggleSider() {
      this.$root.siderOpen = !this.$root.siderOpen;
    },
    logout() {
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('accessTokenExpiredAt');
      this.$router.push({ path: '/auth/login' });
    }
  }
};
</script>
