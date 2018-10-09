<script>
import QuillEditor from 'cover/vendors/quill-editor';
export default {
  name: 'EditorView',
  components: {
    'c-quill-editor': QuillEditor
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Quilll - WYSIWYG HTML Editor">

      <p><code>c-quill-editor</code> component is just a wrapper of <a href="https://quilljs.com" target="_blank">Quill</a> WYSIWYG HTML Editor plugin. It create a wrapper for <strong>Quill</strong>, so you can use it in the vue-way easily.</p>

      <c-note type="warning">
        <strong>Vendor Component</strong>: a vendor component needs a third-party plugin, which would increase the size of your bundle file, so we separte it from the core of cover. If you want to use vendor component, you must import it manually.
      </c-note>

      <hr />

      <c-quill-editor style="height: 360px;">
      <blockquote>
        YOU HAVE YOUR WAY. I HAVE MY WAY. AS FOR THE RIGHT WAY, THE CORRECT WAY, AND THE ONLY WAY, IT DOES NOT EXIST
      </blockquote>
      </c-quill-editor>

      <hr />

      <% markdown %>
      ```html
      <template>
        <c-quill-editor style="height: 360px;">
          <blockquote>
            YOU HAVE YOUR WAY. I HAVE MY WAY. AS FOR THE RIGHT WAY, THE CORRECT WAY, AND THE ONLY WAY, IT DOES NOT EXIST
          </blockquote>
        </c-quill-editor>
      </template>

      <script>
        import QuillEditor from 'cover/vendors/quill-editor'
        export default {
          components: {
            'c-quill-editor': QuillEditor
          }
        }
      </script>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-quill-editor</code></h3>

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
            <th>readonly</th>
            <td>whether to change the editor to ready-only mode</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>placeholder</th>
            <td>placeholder text of editor</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>options</th>
            <td>the Quill config <a href="https://quilljs.com/docs/configuration/" target="_blank">Options</a></td>
            <td>Object</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>

    </c-panel>
  </c-main>
</template>
