<script>
export default {
  name: 'NavsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Nav">
      <c-nav class="u-mb-15">
        <c-nav-item title="Home"></c-nav-item>
        <c-nav-item title="Link"></c-nav-item>
        <c-nav-item title="Another Link"></c-nav-item>
        <c-nav-item title="Disabled" disabled></c-nav-item>
      </c-nav>

      <p>The basic <strong>Nav</strong> component just remove default list style. You can easily extend it to create your own content navigation and keep the code style consistent.</p>

      <% markdown %>
      ```html
      <c-nav>
        <c-nav-item title="Home" />
        <c-nav-item title="Link" />
        <c-nav-item title="Another Link" />
        <c-nav-item title="Disabled" disabled />
      </c-nav>
      ```
      <% endmarkdown %>

    </c-panel>

    <c-panel title="Types">
      <p>Create styped navigation by setting <code>type</code> prop as one of <code>menus</code>, <code>pills</code>, <code>tabs</code>, <code>gap</code>, <code>dot</code></p>
      <c-row gutter="40">
        <c-col md="12">
          <c-box title="Pills">
            <c-nav type="pills" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>

            <% markdown %>
            ```html
            <c-nav type="pills">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col md="12">
          <c-box title="Menus">
            <c-nav type="menus" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>

            <% markdown %>
            ```html
            <c-nav type="menus">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col md="12">
          <c-box title="Tabs">
            <c-nav type="tabs" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>

            <% markdown %>
            ```html
            <c-nav type="tabs">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col md="12">
          <c-box title="Underline">
            <c-nav type="underline" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>
            <% markdown %>
            ```html
            <c-nav type="underline">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col md="12">
          <c-box title="Gap">
            <c-nav type="gap" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>

            <% markdown %>
            ```html
            <c-nav type="gap">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col md="12">
          <c-box title="Dot">
            <c-nav type="dot" class="u-mb-15">
              <c-nav-item title="Home" active></c-nav-item>
              <c-nav-item title="Link"></c-nav-item>
              <c-nav-item title="Another Link"></c-nav-item>
              <c-nav-item title="Disabled" disabled></c-nav-item>
            </c-nav>
            <% markdown %>
            ```html
            <c-nav type="dot">
              <c-nav-item title="Home" active />
              <c-nav-item title="Link" />
              <c-nav-item title="Another Link" />
              <c-nav-item title="Disabled" disabled />
            </c-nav>
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Line">
      <p>
        You can combine <code>type</code> prop and <code>line</code> prop to a more beautiful navigation.
      </p>
      <c-box title="start">
        <c-nav type="dot" line="start" class="u-mb-15">
          <c-nav-item title="Home" active></c-nav-item>
          <c-nav-item title="Link"></c-nav-item>
          <c-nav-item title="Another Link"></c-nav-item>
          <c-nav-item title="Disabled" disabled></c-nav-item>
        </c-nav>
        <% markdown %>
        ```html
        <c-nav type="dot" line="start">
          <c-nav-item title="Home" active />
          <c-nav-item title="Link" />
          <c-nav-item title="Another Link" />
          <c-nav-item title="Disabled" disabled />
        </c-nav>
        ```
        <% endmarkdown %>
      </c-box>
      <c-box title="end">
        <c-nav type="pills" line="end" class="u-mb-15">
          <c-nav-item title="Home" active></c-nav-item>
          <c-nav-item title="Link"></c-nav-item>
          <c-nav-item title="Another Link"></c-nav-item>
          <c-nav-item title="Disabled" disabled></c-nav-item>
        </c-nav>
        <% markdown %>
        ```html
        <c-nav type="pills" line="start">
          <c-nav-item title="Home" active />
          <c-nav-item title="Link" />
          <c-nav-item title="Another Link" />
          <c-nav-item title="Disabled" disabled />
        </c-nav>
        ```
        <% endmarkdown %>
      </c-box>
      <c-box title="around">
        <c-nav type="gap" line="around" class="u-mb-15">
          <c-nav-item title="Home" active></c-nav-item>
          <c-nav-item title="Link"></c-nav-item>
          <c-nav-item title="Another Link"></c-nav-item>
          <c-nav-item title="Disabled" disabled></c-nav-item>
        </c-nav>
        <% markdown %>
        ```html
        <c-nav type="gap" line="around">
          <c-nav-item title="Home" active />
          <c-nav-item title="Link" />
          <c-nav-item title="Another Link" />
          <c-nav-item title="Disabled" disabled />
        </c-nav>
        ```
        <% endmarkdown %>
      </c-box>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered">
        <caption class="u-mb-5"><code>c-nav</code> Attributes</caption>
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
            <td>can be set to <code>pills</code>, <code>menus</code>, <code>tabs</code>, <code>underline</code>, <code>gap</code>, <code>dot</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>line</td>
            <td>create a navigation decorated with line, can be set to <code>start</code>, <code>end</code>, <code>around</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>control the size of navigation, can be set to <code>sm</code>, <code>lg</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered">
        <caption class="u-mb-5"><code>c-nav-item</code> Attributes</caption>
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
            <td>title of nav item</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>active</td>
            <td>whether highlight current nav item</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>whether show disabled style</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
