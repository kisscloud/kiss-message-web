<template>
  <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
    <c-menu-heading  v-if="can($auth.DashboardPage)" label="概览" />
    <c-menu-item v-if="can($auth.DashboardPage)" index="/" icon="icon-compass2" label="主面板" />
    <!-- <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="开发工作台" /> -->
    <!-- <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="运营工作台" />
          <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="引擎概览" />
          <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="钱包概览" /> -->
    <!-- <c-menu-divider />
    <c-menu-heading label="运营" />
    <c-submenu index="exchange" icon="icon-user" label="Bisale">
      <c-menu-item index="/dev/projects" label="运营数据" />
      <c-menu-item index="/dev/projects" label="用户管理" />
      <c-menu-item index="/dev/projects" label="KYC审核" />
      <c-menu-item index="/dev/projects" label="提币审核" />
      <c-menu-item index="/dev/projects" label="财务对账" />
      <c-menu-item index="/dev/projects" label="公告管理" />
      <c-submenu index="exchange" icon="icon-user" label="网站管理">
        <c-menu-item index="/dev/projects" label="Banner 管理" />
      </c-submenu>
      <c-submenu index="exchange" icon="icon-user" label="APP 管理">
        <c-menu-item index="/dev/projects" label="IOS 版本管理" />
        <c-menu-item index="/dev/projects" label="Android 版本管理" />
        <c-menu-item index="/dev/projects" label="Banner 管理" />
      </c-submenu>
    </c-submenu> -->
    <!-- <c-menu-heading label="应用管理" />
    <c-submenu index="exchange" icon="icon-user" label="交易引擎">
      <c-menu-item index="/dev/projects" label="引擎面板" />
      <c-menu-item index="/dev/projects" label="币种" />
      <c-menu-item index="/dev/prds" label="交易对" />
    </c-submenu>
    <c-submenu index="wallet" icon="icon-user" label="钱包">
      <c-menu-item index="/dev/projects" label="钱包面板" />
      <c-menu-item index="/dev/prds" label="币种" />
      <c-menu-item index="/dev/tests" label="财务管理" />
    </c-submenu>
    <c-submenu index="market-robot" icon="icon-user" label="行情管理">
      <c-menu-item index="/dev/projects" label="行情面板" />
      <c-menu-item index="/dev/prds" label="交易对" />
    </c-submenu> -->
    <!-- <c-menu-heading label="服务管理" />
    <c-submenu index="pages" icon="icon-user" label="消息服务">
      <c-menu-item index="/service/accounts" label="短信模板" />
      <c-menu-item index="/service/accounts" label="邮件模板" />
    </c-submenu>
    <c-submenu index="pages" icon="icon-user" label="验证码服务">
      <c-menu-item index="/service/accounts" label="图形验证码" />
    </c-submenu>
    <c-submenu index="pages" icon="icon-user" label="存储服务">
      <c-menu-item index="/service/accounts" label="图形验证码" />
    </c-submenu>
    <c-submenu index="pages" icon="icon-user" label="短链接">
      <c-menu-item index="/service/accounts" label="图形验证码" />
    </c-submenu> -->
    <c-menu-heading label="系统管理" />
    <c-menu-item index="/clients" icon="icon-shield2" label="授权管理" />
    <c-submenu index="/permission" class="is-open" icon="icon-user" label="账户系统">
      <c-menu-item index="/permission/accounts" label="成员管理" />
      <c-menu-item index="/permission/roles" label="角色管理" />
      <c-menu-item index="/permission/permissions" label="权限管理" />
      <c-menu-item index="/permission/logs" label="操作日志" />
    </c-submenu>
    
  </c-menu>
</template>

<script>
  export default {
    name: 'Navigation',
    methods: {
      onSelect(index) {
        this.$router.push(index);
      }
    }
  };
</script>
