<template>
  <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
    <c-menu-heading  v-if="can($auth.DashboardPage)" label="概览" />
    <c-menu-item v-if="can($auth.DashboardPage)" index="/" icon="icon-compass2" label="主面板" />
    <c-menu-heading label="服务管理" />
    <c-menu-item index="/clients" icon="icon-shield2" label="授权管理" />
    <c-menu-item index="/templates" icon="icon-embed2" label="消息模板" />
    <c-menu-item index="/operation/logs" icon="icon-stack2" label="操作日志" />
    <c-menu-item index="/send/logs" icon="icon-file-stats" label="发送日志" />
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
