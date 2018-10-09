<script>
export default {
  name: 'TagsView',
  data() {
    return {
      opts: {
        grape: false,
        berry: false,
        pear: false,
        apple: false,
        banana: false
      }
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Type">
      <p>
        <strong>Tag</strong> component for categorizing or markup.
      </p>
      <c-tag>Default</c-tag>
      <c-tag class="u-mb-5" type="primary">Primary</c-tag>
      <c-tag class="u-mb-5" type="info">Info</c-tag>
      <c-tag class="u-mb-5" type="success">Success</c-tag>
      <c-tag class="u-mb-5" type="danger">Danger</c-tag>
      <c-tag class="u-mb-5" type="warning">Warning</c-tag>
      <c-tag class="u-mb-5" type="ghost">Ghost</c-tag>
      <% markdown %>
      ```html
      <c-tag type="primary">Primary</c-tag>
      <c-tag type="info">Info</c-tag>
      <c-tag type="success">Success</c-tag>
      <c-tag type="danger">Danger</c-tag>
      <c-tag type="warning">Warning</c-tag>
      <c-tag type="ghost">Ghost</c-tag>
      ```
      <% endmarkdown %>
    </c-panel>
    <c-row>
      <c-col md="12">
        <c-panel title="Cloasble">
          <c-tag closable>Default</c-tag>
          <c-tag closable type="primary">Primary</c-tag>
          <c-tag closable type="info">Info</c-tag>
          <c-tag closable type="success">Success</c-tag>
          <c-tag closable type="danger">Danger</c-tag>
          <c-tag closable type="warning">Warning</c-tag>
          <br><br>

          <p>Closable <strong>Tag</strong> supports <code>@close</code> event.</p>
          <% markdown %>
          ```html
          <template>
            <c-tag closable v-show="visible" type="primary" @click="onClose">Primary</c-tag>
          </template>

          <script>
            export default {
              data() {
                return {
                  visible: true
                }
              },
              methods: {
                onClose() {
                  // do something when user click x
                  this.visible = false
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Checkable">
          <c-tag checkable v-model="opts.grape" type="primary">Grape</c-tag>
          <c-tag checkable v-model="opts.berry" type="info">Blueberry</c-tag>
          <c-tag checkable v-model="opts.pear" type="success">Pear</c-tag>
          <c-tag checkable v-model="opts.apple" type="danger">Apple</c-tag>
          <c-tag checkable v-model="opts.banana" type="warning">Banana</c-tag>
          <br><br>
          <pre>{{opts}}</pre>
          <hr>

          <p>Checkable <strong>Tag</strong> works like checkbox, click it to toggle checked state. Use <code>v-model</code> to control its checked value.</p>
          <% markdown %>
          ```html
          <template>
          <c-tag checkable v-model="selected" type="primary">Grape</c-tag>
          </template>

          <script>
            export default {
              data() {
                return {
                  selected: false
                }
              }
            }
          </script>
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
            <td>can be set to <code>ghost</code>, <code>primary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>set <code>closable</code> property to make tag closable</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>checkable</td>
            <td>use with <code>v-model</code> property</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>checkable tag status</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

  </c-main>
</template>
