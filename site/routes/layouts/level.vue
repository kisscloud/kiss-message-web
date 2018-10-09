<script>
export default {
  name: 'LevelView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Level">
      <c-level class="u-mb-15">
        <template slot="left">
          <c-level-item>
            <c-button type="success" smart>Add</c-button>
          </c-level-item>
          <c-level-item>
            <a href="#">All</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Publish</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Draft</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Pending</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Trash</a>
          </c-level-item>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form-group>
              <c-form-input placeholder="Search..."></c-form-input>
              <c-button type="primary">Submit</c-button>
            </c-form-group>
          </c-level-item>
        </template>
      </c-level>

      <p>Vertical align layout based on flexbox.</p>
      <% markdown %>
      ```html
      <c-level>
        <template slot="left">
          <c-level-item>
            <c-button type="success" smart>Add</c-button>
          </c-level-item>
          <c-level-item>
            <a href="#">All</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Publish</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Draft</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Pending</a>
          </c-level-item>
          <c-level-item>
            <a href="#">Trash</a>
          </c-level-item>
        </template>

        <template slot="right">
          <c-level-item>
            <c-form-group>
              <c-form-input placeholder="Search..." />
              <c-button type="primary">Submit</c-button>
            </c-form-group>
          </c-level-item>
        </template>
      </c-level>
      ```
      <% endmarkdown %>
      <hr />
      <c-level class="u-mb-15">
        <template slot="left">
          <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
        </template>
        <c-button-group slot="center">
          <c-button type="primary" outline>ALL PROJECTS</c-button>
          <c-button type="primary" outline>SHARED</c-button>
          <c-button type="primary" outline>MEDIA FILES</c-button>
        </c-button-group>
        <template slot="right">
          <c-level-item>
            <c-form-select
              value="2016-01-25"
              :options="[
                {value: '2016-01-25', label: 'Jul 25, 16'},
                {value: '2016-01-26', label: 'Jul 26, 16'},
                {value: '2016-01-27', label: 'Jul 27, 16'},
                {value: '2016-01-28', label: 'Jul 28, 16'},
              ]"
            ></c-form-select>
          </c-level-item>
        </template>
      </c-level>
      <% markdown %>
      ```html
      <c-level>
        <template  slot="left">
          <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
        </template>

        <c-button-group slot="center">
          <c-button type="primary" outline>ALL PROJECTS</c-button>
          <c-button type="primary" outline>SHARED</c-button>
          <c-button type="primary" outline>MEDIA FILES</c-button>
        </c-button-group>

        <template slot="right">
          <c-level-item>
            <c-form-select
              value="2016-01-25"
              :options="[
                {value: '2016-01-25', label: 'Jul 25, 16'},
                {value: '2016-01-26', label: 'Jul 26, 16'},
                {value: '2016-01-27', label: 'Jul 27, 16'},
                {value: '2016-01-28', label: 'Jul 28, 16'},
              ]"
            />
          </c-level-item>
        </template>
      </c-level>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <h3><code class="u-fs-18">c-level</code></h3>
      <table class="table table--bordered table--stress">
        <caption>Slots</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>default</th>
            <td>default area</td>
          </tr>
          <tr>
            <th>left</th>
            <td>left area</td>
          </tr>
          <tr>
            <th>center</th>
            <td>center area</td>
          </tr>
          <tr>
            <th>right</th>
            <td>right area</td>
          </tr>
        </tbody>
      </table>
      <hr>
      <h3><code class="u-fs-18">c-level-item</code></h3>
    </c-panel>
  </c-main>
</template>
