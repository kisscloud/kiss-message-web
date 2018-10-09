<script>
export default {
  name: 'BadgesView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Type">
      <c-badge>Default</c-badge>
      <c-badge type="primary">Primary</c-badge>
      <c-badge type="info">Info</c-badge>
      <c-badge type="success">Success</c-badge>
      <c-badge type="danger">Danger</c-badge>
      <c-badge type="warning">Warning</c-badge>
      <br><br>

      <p>Small count and labeling component.</p>
      <% markdown %>
      ```html
      <c-badge>Default</c-badge>
      <c-badge type="primary">Primary</c-badge>
      <c-badge type="info">Info</c-badge>
      <c-badge type="success">Success</c-badge>
      <c-badge type="danger">Danger</c-badge>
      <c-badge type="warning">Warning</c-badge>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered">
        <caption>Attributes</caption>
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
            <td>type</td>
            <td>can be set to <code>primary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>tag</td>
            <td>html tag name</td>
            <td>string</td>
            <td>span</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
