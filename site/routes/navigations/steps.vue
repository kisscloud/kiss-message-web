<script>
export default {
  name: 'StepsView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Steps">
      <c-steps current="2" class="u-mb-15">
        <c-steps-item
          title="Finished"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="In Progress"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
      </c-steps>
      <% markdown %>
      ```html
      <c-steps current="2">
        <c-steps-item
          title="Finished"
          desc="Some description text here."
        />
        <c-steps-item
          title="In Progress"
          desc="Some description text here."
        />
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        />
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        />
      </c-steps>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Status">
      <c-steps current="2" status="warning" class="u-mb-15">
        <c-steps-item
          title="Finished"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="In Progress"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
      </c-steps>
      <c-steps current="2" status="error" class="u-mb-15">
        <c-steps-item
          title="Finished"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="In Progress"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
        <c-steps-item
          title="Waiting"
          desc="Some description text here."
        ></c-steps-item>
      </c-steps>

      <p>In order to change current step status, set <code>status</code> prop value to <code>warning</code> or <code>error</code>.</p>
      <% markdown %>
      ```html
      <c-steps current="2" status="warning">
        ...
      </c-steps>

      <c-steps current="2" status="error">
        ...
      </c-steps>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <h3><code class="u-fs-18">c-steps</code></h3>
      <table class="table table--bordered table--stress">
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
            <th>current</th>
            <td>numeric value of current step</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>status</th>
            <td>can be set to <code>warning</code> or <code>error</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <hr>
      <h3><code class="u-fs-18">c-steps-item</code></h3>
      <table class="table table--bordered table--stress">
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
            <th>title</th>
            <td>step title</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>desc</th>
            <td>step description</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
