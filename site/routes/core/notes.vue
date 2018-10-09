<script>
export default {
  name: 'NotesView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Type">
          <c-note>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          <c-note type="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          <c-note type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero.</c-note>
          <c-note type="success">Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-note>
          <c-note type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>

          <p><strong>Note</strong> component provide prompt messages in a page for users to take notice.</p>

          <p>There are five predefined types of <strong>Note</strong>, use the <code>type</code> attribute to create different styled <strong>Note</strong> component.</p>
          <% markdown %>
          ```html
          <c-note>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          <c-note type="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero.</c-note>
          <c-note type="warning">consectetur adipisicing elit. Earum similique dolor accusantium deleniti labore. Facilis!</c-note>
          <c-note type="success">Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-note>
          <c-note type="danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Close">
          <c-note closeable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          <c-note type="warning" closeable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>
          <c-note type="info" closeable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, vero.</c-note>
          <c-note type="success" closeable>Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-note>
          <c-note type="danger" closeable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ratione!</c-note>

          <p>Add a close button to <strong>Note</strong> with <code>closeable</code> attribute.</p>
          <% markdown %>
          ```html
          <c-note type="success" closeable>Nisi consectetur officia quaerat, eum, iste optio facilis fugit. Blanditiis, delectus, quia.</c-note>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

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
            <td>can be set to <code>warning</code>, <code>info</code>, <code>success</code>, <code>danger</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>closeable</td>
            <td>whether show the &times; button</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
