<template>
  <transition-group
    class="notification-list"
    tag="div"
    name="is">
    <c-notification
      v-for="(item, i) in items"
      :key="item.id"
      :type="item.type"
      :title="item.title"
      :closeable="item.closeable"
      :duration="item.duration"
      @close="remove(i)">
      {{item.content}}
    </c-notification>
  </transition-group>
</template>

<script>
import Notification from './notification.vue';
export default {
  name: 'c-notification-list',

  components: {
    'c-notification': Notification
  },

  data() {
    return {
      items: []
    };
  },

  methods: {
    remove(index) {
      this.items.splice(index, 1);
    },
    add(obj) {
      this.items.unshift(obj);
    }
  }
};
</script>
