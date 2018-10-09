<script>
export default {
  name: 'PopupView',
  data() {
    return {
      visible: false
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Popup">
      <p>Use <code>c-popup</code> component to create overlay prompt content.</p>
      <c-button type="primary" @click="visible = true" smart>Show</c-button>
      <c-popup v-model="visible">
        <img :src="'static/images/avatar.jpg'" alt="" />
      </c-popup>

      <hr />
      <% markdown %>
      ```html
      <template>
        <c-button type="primary" @click="visible = true" smart>Show</c-button>

        <c-popup v-model="visible">
          <img src="..." alt="" />
        </c-popup>
      </template>

      <script>
        export default {
          data() {
            return {
              visible: false
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered table--stress">
        <caption>Props</caption>
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
            <td>v-model</td>
            <td>control the visibility of popup</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>position of content, can be set to <code>center</code>, <code>top</code>, <code>top-left</code>, <code>top-right</code>,<code>right</code>, <code>left</code>, <code>bottom</code>, <code>bottom-left</code>, <code>bottom-right</code>
            <td>String</td>
            <td>center</td>
          </tr>
          <tr>
            <td>mask</td>
            <td>whether to show backdrop mask</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>close-on-click-mask</td>
            <td>whether popup can be closed by clicking the mask</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>transition</td>
            <td>the entering/leaving transition name of component, <code>zoom</code>, <code>fade</code>, <code>slideleft</code>, <code>slideright</code>, <code>slidedown</code></td>
            <td>String</td>
            <td>fade</td>
          </tr>
        </tbody>
      </table>
      <hr />
        <table class="table table--bordered table--stress">
        <caption>Events</caption>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Arguments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shown</td>
            <td>trigger after popup content has been shown</td>
            <td>-</td>
          </tr>
          <tr>
            <td>hidden</td>
            <td>trigger after popup content has been hidden</td>
            <td>-</td>
          </tr>
          <tr>
            <td>click-mask</td>
            <td>trigger when user click backdrop mask</td>
            <td><code>event</code> - mouse click event</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
