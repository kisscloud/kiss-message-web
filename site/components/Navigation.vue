<template>
  <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
    <c-menu-heading  v-if="can($auth.DashboardPage)" label="概览" />
    <c-menu-item v-if="can($auth.DashboardPage)" index="/" icon="icon-compass2" label="主面板" />
    <c-menu-heading label="服务管理" />
    <c-menu-item index="/merchants" icon="icon-user-tie" label="商户管理" />
    <c-menu-item index="/assets" icon="icon-coins" label="资产管理" />
    <c-menu-item index="/transactions" icon="icon-paragraph-justify" label="交易记录" />
    <c-menu-item index="/currencies" icon="icon-coin-dollar" label="币种管理" />        
    <c-menu-item index="/operation/logs" icon="icon-stack2" label="操作日志" />    
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
