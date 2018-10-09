<template>
  <c-app :sider-open="$root.siderOpen">
    <c-sider class="u-hidden-up@md">
      <c-brand class="u-bg-primary" slot="start">
        <img src="../../../assets/logo-white.svg" alt="Cover">
      </c-brand>
      <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
        <c-menu-heading label="Overview" />
        <c-menu-item index="/" icon="icon-compass2" label="Home" />
        <c-menu-divider />
      </c-menu>
    </c-sider>
    <c-content>
      <c-header>
        <div class="l-container">
          <nav class="navbar u-pl-0 u-pr-0 navbar--light">
            <div class="navbar__start">
              <a class="navbar__item u-hidden-up@md" @click="toggleSider">
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
        </div>
      </c-header>
      <c-body>
        <header class="toolbar">
          <div class="l-container">
            <div class="toolbar__group">
              <c-level>
                <template slot="left">
                  <h1 class="toolbar__title">Performance</h1>
                </template>
                <template slot="right">
                  <c-button type="success" smart icon-start="icon-download4">Download Report</c-button>
                </template>
              </c-level>
            </div>
            <!-- END .toolbar__group -->
            <div class="toolbar__group">
              <c-level>
                <template slot="left">
                  <c-nav type="pills">
                    <c-nav-item title="Analytics" active></c-nav-item>
                    <c-nav-item title="Previous Exports"></c-nav-item>
                    <c-nav-item title="Targeting"></c-nav-item>
                    <c-nav-item title="Customers"></c-nav-item>
                    <c-nav-item title="Team"></c-nav-item>
                  </c-nav>
                </template>
                <template slot="right">
                  <c-form layout="inline">
                    <c-form-field>
                      <c-form-group>
                        <c-form-select
                          value="2016-01-25"
                          :options="[{value: '2016-01-25', label: 'Jul 25, 16'}]"
                        ></c-form-select>
                        <c-form-addon>-</c-form-addon>
                        <c-form-select
                          value="2016-08-22"
                          :options="[{value: '2016-08-22', label: 'Aug 22, 16'}]"
                        ></c-form-select>
                      </c-form-group>
                    </c-form-field>
                  </c-form>
                </template>
              </c-level>
            </div>
            <!-- END .toolbar__group -->
          </div>
        </header>
        <!-- END .toolbar -->
        <div class="l-container">
          <section class="message u-m-auto">
            <p class="message__title">Hello!</p>
            <p class="message__content">
              Love beautiful Design? We do too.
            </p>
            <c-button type="primary" size="lg" @click.prevent="goBack" smart>Go Back!</c-button>
          </section>
        </div>
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
  name: 'CenterTemplate',
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
