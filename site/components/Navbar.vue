<template>
  <nav class="navbar navbar--light">
    <div class="navbar__start">
      <a class="navbar__item u-hidden-up@lg" @click="toggleSider">
        <i class="i-menu i-menu--light"></i>
      </a>
      <!-- <router-link to="/getting-started" class="navbar__item u-hidden-down@sm">开发文档</router-link> -->
      <!-- <a href="http://cover.20theme.com" class="navbar__item u-hidden-down@sm" target="_blank">开发文档</a> -->
    </div>
    <div class="navbar__end">
        <!-- <c-dropdown>
        <a class="navbar__item has-children u-hidden-down@sm">添加</a>
        <c-dropmenu slot="content">
          <c-dropmenu-item title="创建用户" href="http://point.moyu.io" target="_blank" />
          <c-dropmenu-item title="添加角色" href="https://flatpickr.js.org/" target="_blank" />
          <c-dropmenu-item title="添加部门" href="https://flatpickr.js.org/" target="_blank" />
          <c-dropmenu-item title="添加权限" href="http://www.chartjs.org/" target="_blank" />
        </c-dropmenu>
      </c-dropdown> -->
      <!-- <div class="navbar__item" v-text="`v${version}`"></div>
      <div class="navbar__item u-hidden-down@sm">
        <c-form-input icon-start="icon-search" placeholder="Search..." flat />
      </div> -->
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
      this.$router.push({ path: '/auth/login' });
    }
  }
};
</script>
