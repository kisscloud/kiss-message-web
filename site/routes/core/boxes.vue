<script>
export default {
  name: 'BoxesView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Type">
      <c-box title="Box Heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum dolor deleniti sequi, neque ea earum iusto quaerat laudantium fuga.
      </c-box>
      <c-box title="Box Heading" type="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum dolor deleniti sequi, neque ea earum iusto quaerat laudantium fuga.
      </c-box>
      <c-box title="Box Heading" type="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum dolor deleniti sequi, neque ea earum iusto quaerat laudantium fuga.
      </c-box>
      <c-box title="Box Heading" type="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum dolor deleniti sequi, neque ea earum iusto quaerat laudantium fuga.
      </c-box>
      <c-box title="Box Heading" type="danger">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum dolor deleniti sequi, neque ea earum iusto quaerat laudantium fuga.
      </c-box>

      <p>There are five predefined types of <strong>Box</strong>, use the <code>type</code> attribute to create different styled <strong>Box</strong> component.</p>
      <% markdown %>
      ```html
      <c-box title="Box Heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </c-box>
      <c-box title="Box Heading" type="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </c-box>
      <c-box title="Box Heading" type="warning">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </c-box>
      <c-box title="Box Heading" type="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </c-box>
      <c-box title="Box Heading" type="danger">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
            <td>can be set to <code>warning</code>, <code>info</code>, <code>success</code>, <code>danger</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>the title of box</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
