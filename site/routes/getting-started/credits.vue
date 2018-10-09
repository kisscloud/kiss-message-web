<script>
export default {
  name: 'CreditsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Sources and Credits">
      <% markdown %>
      We've used the following plugins as listed.

      <table class="table table--bordered table--striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Point</td>
            <td>^1.4.0</td>
            <td><a href="https://github.com/moyus/point">https://github.com/moyus/point</a></td>
          </tr>
          <tr>
            <td>IcoMoon</td>
            <td>^1.1.0</td>
            <td><a href="https://icomoon.io/">https://icomoon.io/</a></td>
          </tr>
          <tr>
            <td>Chart.js</td>
            <td>^2.7.2</td>
            <td><a href="http://www.chartjs.org/">http://www.chartjs.org/</a></td>
          </tr>
          <tr>
            <td>Flatpickr</td>
            <td>^4.5.0</td>
            <td><a href="https://github.com/chmln/flatpickr">https://github.com/chmln/flatpickr</a></td>
          </tr>
          <tr>
            <td>Vue</td>
            <td>^2.5.13</td>
            <td><a href="http://vuejs.org/">http://vuejs.org/</a></td>
          </tr>
          <tr>
            <td>vue-multiselect</td>
            <td>^2.0.8</td>
            <td><a href="https://github.com/monterail/vue-multiselect">https://github.com/monterail/vue-multiselect</a></td>
          </tr>
          <tr>
            <td>vee-validate</td>
            <td>^2.1.0</td>
            <td><a href="https://github.com/baianat/vee-validate">https://github.com/baianat/vee-validate</a></td>
          </tr>
          <tr>
            <td>Quill</td>
            <td>^1.3.5</td>
            <td><a href="https://popper.js.org/">https://quilljs.com/</a></td>
          </tr>
          <tr>
            <td>Popper.js</td>
            <td>^1.13.0</td>
            <td><a href="https://popper.js.org/">https://popper.js.org/</a></td>
          </tr>
        </tbody>
      </table>
      <% endmarkdown %>
      </c-panel>
  </c-main>
</template>
