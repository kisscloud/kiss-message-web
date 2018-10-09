<script>
export default {
  name: 'PanelsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Panel">
      <p>Basic <strong>Panel</strong> example with only heading.</p>

      <p>It's very powerful using <strong>Panel</strong> with <strong>Grid</strong> layout component to build your app.</p>
      <% markdown %>
      ```html
      <c-panel title="Panel Heading">
        Place your body content here
      </c-panel>
      ```
      <% endmarkdown %>
    </c-panel>
    <c-row>
      <c-col md="12">
      <c-panel title="Panel Title<small>with description here</small>">
        <p>You can add html code to title prop.</p>
        <% markdown %>
        ```html
        <c-panel title="Panel Title<small>with description here</small>">
          Place your body content here.
        </c-panel>
        ```
        <% endmarkdown %>
      </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Panel control">
          <i class="icon-cog" slot="control"></i>

          <p>Basic <strong>Panel</strong> with controls. You can archive this by using the `[slot="control"]` attribute.</p>
          <% markdown %>
          ```html
          <c-panel title="Panel control">
            <i class="icon-cog" slot="control"></i>
            place your body content here!
          </c-panel>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Panel footer">

          <p>You can add some footer content by using the `[slot="footer"]` attribute.</p>
          <% markdown %>
          ```html
          <c-panel title="Panel footer">
            place your body content here.

            <div class="u-text-right" slot="footer">
              <c-button type="ghost">Cancel</c-button>
              <c-button type="primary" smart>Submit</c-button>
            </div>

          </c-panel>
          ```
          <% endmarkdown %>
          <div class="u-text-right" slot="footer">
            <c-button type="ghost">Cancel</c-button>
            <c-button type="primary" smart>Submit</c-button>
          </div>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Ghost Panel" type="ghost">

          <p>Create a transparent <strong>Panel</strong> by using the <code>[type="ghost"]</code> attribute.</p>
          <% markdown %>
          ```html
          <c-panel title="Ghost Panel" type="ghost">
            place your body content here.
          </c-panel>
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
            <td>title</td>
            <td>the title of <strong>Panel</strong></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>theme modifiers, can be set to <code>ghost</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered">
        <caption>Slot</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>content of <strong>Panel</strong> body</td>
          </tr>
          <tr>
            <td>header</td>
            <td>content of <strong>Panel</strong> header, this will replace the title of <strong>Panel</strong></td>
          </tr>
          <tr>
            <td>footer</td>
            <td>content of <strong>Panel</strong> footer</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
