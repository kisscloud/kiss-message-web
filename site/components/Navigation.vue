<template>
  <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
    <c-menu-heading label="概览" />
    <c-menu-item index="/" icon="icon-compass2" label="主面板" />
    <!-- <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="开发工作台" /> -->
    <!-- <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="运营工作台" />
        <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="引擎概览" />
        <c-menu-item index="/dev/dashboard" icon="icon-compass2" label="钱包概览" /> -->
    <c-menu-divider />
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
    </c-submenu>
    <c-menu-heading label="应用管理" />
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
    </c-submenu>
    <!-- <c-submenu index="pages" icon="icon-user" label="开发平台">
          <c-menu-item index="/dev/projects" label="项目管理" />
          <c-menu-item index="/dev/prds" label="需求管理" />
          <c-menu-item index="/dev/tests" label="项目测试" />
          <c-menu-item index="/dev/compile" label="编译构建" />
          <c-menu-item index="/dev/deploy" label="项目部署" />
          <c-menu-item index="/dev/documents" label="文档中心" />
          <c-menu-item index="/permission/roles" label="代码仓库" />
        </c-submenu> -->
    <c-menu-heading label="系统管理" />
    <c-submenu index="pages" icon="icon-user" label="权限管理">
      <c-menu-item index="/permission/accounts" label="成员管理" />
      <c-menu-item index="/permission/roles" label="角色管理" />
      <c-menu-item index="/permission/permissions" label="权限管理" />
      <c-menu-item index="/permission/logs" label="操作日志" />
    </c-submenu>
    <!-- <c-menu-item icon="icon-wrench" index="/utilities" label="开发文档" /> -->
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
