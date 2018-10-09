<script>
export default {
  name: 'ButtonsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Types">
      <p>
        <c-button>Button</c-button>
        <c-button type="ghost">Ghost</c-button>
        <c-button type="primary">Primary</c-button>
        <c-button type="info">Info</c-button>
        <c-button type="success">Success</c-button>
        <c-button type="danger">Danger</c-button>
      </p>

      <p>There are six predefined button styles. Use the <code>type</code> attribute property to create those different type button.</p>
      <% markdown %>
      ```html
      <c-button>Button</c-button>
      <c-button type="ghost">Ghost</c-button>
      <c-button type="primary">Primary</c-button>
      <c-button type="info">Info</c-button>
      <c-button type="success">Success</c-button>
      <c-button type="danger">Danger</c-button>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Outline">
      <p>
        <c-button type="primary" outline>Primary</c-button>
        <c-button type="info" outline>Info</c-button>
        <c-button type="success" outline>Success</c-button>
        <c-button type="danger" outline>Danger</c-button>
      </p>

      <p>By adding the <code>outline</code> attribute on button component to create outline styled button.</p>
      <% markdown %>
      ```html
      <c-button type="primary" outline>Primary</c-button>
      <c-button type="info" outline>Info</c-button>
      <c-button type="success" outline>Success</c-button>
      <c-button type="danger" outline>Danger</c-button>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="States">
      <p>
        <c-button type="primary" disabled>Primary</c-button>
        <c-button type="info" :disabled="true">Info</c-button>
      </p>

      <p>Make button inactive by adding the <code>disabled</code> attribute on button component.</p>
      <% markdown %>
      ```html
      <c-button type="primary" disabled>Primary</c-button>
      <c-button type="info" :disabled="true">Info</c-button>
      ```
      <% endmarkdown %>
      <hr />
      <p>
        <c-button type="primary" loading>Submit</c-button>
        <c-button type="primary" :loading="true" disabled>Confirm</c-button>
      </p>

      <p>Swith button state into *loading* by adding the `loading` attribute on button component.</p>
      <% markdown %>
      ```html
      <c-button type="primary" loading>Submit</c-button>
      <c-button type="primary" :loading="true" disabled>Confirm</c-button>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Sizes">
      <p>
        <c-button type="ghost" size="sm">Small Size</c-button>
        <c-button type="ghost">Default Size</c-button>
        <c-button type="ghost" size="lg">Large Size</c-button>
      </p>

      <p>Use the <code>size</code> attribute property to change button sizes, its value can be <code>sm</code> or <code>lg</code>.</p>
      <% markdown %>
      ```html
      <c-button type="ghost" size="sm">Small Size</c-button>
      <c-button type="ghost">Default Size</c-button>
      <c-button type="ghost" size="lg">Large Size</c-button>
      ```
      <% endmarkdown %>
      <hr />
      <p>By adding <code>smart</code> attribute to make button has more padding space on its both sides.</p>
      <p>
        <c-button type="primary" smart size="sm">Submit</c-button>
        <c-button type="primary" smart>Submit</c-button>
        <c-button type="primary" smart size="lg">Submit</c-button>
      </p>
      <% markdown %>
      ```html
      <c-button type="primary" smart size="sm">Submit</c-button>
      <c-button type="primary" smart>Submit</c-button>
      <c-button type="primary" smart size="lg">Submit</c-button>
      ```
      <% endmarkdown %>
      <hr />
      <p>By adding <code>block</code> attribute to create full-width blocked button.</p>
      <p>
        <c-button type="primary" block size="sm">Ant-Man</c-button>
      </p>
      <p>
        <c-button type="primary" block>Human</c-button>
      </p>
      <p>
        <c-button type="primary" block size="lg">Hulk</c-button>
      </p>
      <% markdown %>
      ```html
      <c-button type="primary" block size="sm">Ant-Man</c-button>
      <c-button type="primary" block>Human!</c-button>
      <c-button type="primary" block size="lg">Hulk!</c-button>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Group">
      <p>
        <c-button-group>
          <c-button type="primary">Left</c-button>
          <c-button type="primary">Middle</c-button>
          <c-button type="primary">Right</c-button>
        </c-button-group>
      </p>

      <p>Buttons can be grouped by placing multiple button component elements into a <code>c-button-group</code> component.</p>
      <% markdown %>
      ```html
      <c-button-group>
        <c-button type="primary">Left</c-button>
        <c-button type="primary">Middle</c-button>
        <c-button type="primary">Right</c-button>
      </c-button-group>
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
            <td>tag</td>
            <td>html tag name</td>
            <td>String</td>
            <td>button</td>
          </tr>
          <tr>
            <td>type</td>
            <td>can be set to <code>primary</code> <code>info</code> <code>success</code> <code>danger</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon-start</td>
            <td>icon class at the left place</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon-right</td>
            <td>icon class at the right place</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>set the size of button, can be set to <code>sm</code> <code>lg</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>outline</td>
            <td>change button into outline style</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>set the disabled status of button</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>set the loading status of button</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>submit</td>
            <td>set as form submit button</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>smart</td>
            <td>whether let button get more padding on its both sides</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>block</td>
            <td>whether change button into blocked style</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
