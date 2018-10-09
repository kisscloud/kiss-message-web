<template>
  <c-app sider-type="mini" :sider-open="$root.siderOpen">
    <c-sider>
      <c-brand slot="start">
        <img src="../../../assets/logo-white.svg" alt="Cover">
      </c-brand>
      <c-menu mini theme="dark" :activeIndex="$route.path" @select="onSelect">
        <c-menu-heading label="Overview" />
        <c-menu-item index="/" icon="icon-compass2" label="Home" />
      </c-menu>
    </c-sider>
    <c-content>
      <c-header>
        <nav class="navbar navbar--light">
          <div class="navbar__start">
            <a class="navbar__item u-hidden-up@lg" @click="toggleSider">
              <i class="i-menu i-menu--light"></i>
            </a>
            <a href="http://cover.20theme.com" class="navbar__item u-hidden-down@sm" target="_blank">Home</a>
            <c-dropdown>
              <a class="navbar__item has-children u-hidden-down@sm">Resources</a>
              <c-dropmenu slot="content">
                <c-dropmenu-item title="Point" href="http://point.moyu.io" target="_blank" />
                <c-dropmenu-item title="Flatpickr" href="https://flatpickr.js.org/" target="_blank" />
                <c-dropmenu-item title="Chart.js" href="http://www.chartjs.org/" target="_blank" />
                <c-dropmenu-item title="Quill" href="https://quilljs.com/" target="_blank" />
                <c-dropmenu-item title="vue-multiselect" href="https://github.com/shentao/vue-multiselect" target="_blank" />
                <c-dropmenu-item title="vee-validate" href="https://github.com/baianat/vee-validate" target="_blank" />
              </c-dropmenu>
            </c-dropdown>
            <a href="https://themeforest.net/item/cover-dashboard-ui-kit-for-modern-web-application/19869018" class="navbar__item u-hidden-down@sm" target="_blank">Buy It Now</a>
            <a href="mailto:moyuboy@gmail.com" class="navbar__item u-hidden-down@sm">Support</a>
          </div>
          <div class="navbar__end">
            <div class="navbar__item u-hidden-down@sm">
              <c-form-input icon-start="icon-search" placeholder="Search..." flat />
            </div>
            <c-dropdown placement="bottom-end">
              <div class="navbar__item">
                <a role="button" class="account">
                  <figure class="account__media">
                    <img class="avatar" :src="'static/images/avatar.jpg'" alt="">
                  </figure>
                  <div class="account__after">
                    <i class="i-caret i-caret--light"></i>
                  </div>
                </a>
              </div>
              <c-dropmenu slot="content">
                <c-dropmenu-item title="Profile" />
                <c-dropmenu-item title="Billing" />
                <c-dropmenu-item title="Settings" />
                <c-dropmenu-divider />
                <c-dropmenu-item title="Logout" />
              </c-dropmenu>
            </c-dropdown>
          </div>
        </nav>
      </c-header>
      <c-body>
        <c-main>
          <div class="l-container">
            <section class="message u-m-auto">
              <p class="message__title">Hello!</p>
              <p class="message__content">
                Love beautiful Design? We do too.
              </p>
              <c-button type="primary" size="lg" @click.prevent="goBack" smart>Go Back!</c-button>
            </section>
          </div>
        </c-main>
      </c-body>
      <c-footer>
        <div class="l-container u-text-center u-text-muted u-fs-12">
          <p>Dashboard UI kit by 20Theme</p>
          <p>© 2017-2018. All RIGHT RESERVED.</p>
        </div>
      </c-footer>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'MiniTemplate',
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
    toggleSider() {
      this.$root.siderOpen = !this.$root.siderOpen;
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>
