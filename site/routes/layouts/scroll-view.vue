<script>
export default {
  name: 'ScrollView',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    add() {
      this.list.push(this.list.length + 1);
    },
    remove() {
      this.list.pop();
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Scroll View">
      <code>c-scroll-view</code> component is a scrollable container with the same custom scrollbar cross different browsers. It's built with native scroll: <code>overflow: auto</code>.
    </c-panel>
    <c-row>
      <c-col md="12">
        <c-panel title="Vertical">
          <c-scroll-view style="height: 300px;">
            <ul class="list">
              <li
                class="list__item"
                v-for="i in list"
                v-text="`Item ${i}`"
              ></li>
            </ul>
          </c-scroll-view>
          <hr />
          <c-button @click="remove">Delete Item</c-button>
          <c-button type="primary" @click="add">Add Item</c-button>
          <hr />
          <% markdown %>
          ```html
          <c-scroll-view style="height:300px;">
            // your content
          </c-scroll-view>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Horizontal">
          <c-scroll-view style="max-width: 600px;width: 100%;">
            <ul class="cover-list">
              <li
                v-for="i in list"
                v-text="`Item ${i}`"
              ></li>
            </ul>
          </c-scroll-view>
          <hr />
          <c-button @click="remove">Delete Item</c-button>
          <c-button type="primary" @click="add">Add Item</c-button>
          <hr />
          <% markdown %>
          ```html
          <c-scroll-view style="width:600px;">
            // your content
          </c-scroll-view>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>
    <c-panel title="API">
      <h3><code class="u-fs-18">c-scroll-view</code></h3>
      <table class="table table--bordered table--stress">
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>theme</th>
            <td>Can be set to <code>light</code>.</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>

<style lang="scss" scoped>
.cover-list {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
