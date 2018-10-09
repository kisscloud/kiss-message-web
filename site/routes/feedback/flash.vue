<script>
export default {
  name: 'FlashView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Type">
      <c-flash>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero.</c-flash>
      <c-flash type="success">Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-flash>
      <c-flash type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum.</c-flash>

      <p>Generally, <strong>Flash</strong> component provide action feedback messages in a page after user submit a form.</p>

      <p>There are six predefined types of <strong>Flash</strong>, use the <code>type</code> attribute to create different styled <strong>Flash</strong> component.</p>
      <% markdown %>
      ```html
      <c-flash>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero.</c-flash>
      <c-flash type="success">Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-flash>
      <c-flash type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-flash>
      <c-flash type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum.</c-flash>
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
            <td>closeable</td>
            <td>whether show the &times; button</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
