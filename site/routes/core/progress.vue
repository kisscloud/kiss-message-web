<script>
export default {
  name: 'ProgressView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Progress Bar">
      <c-row gutter="20">
        <c-col md="8">
          <p>static or active:</p>
          <c-progress-bar value="30"></c-progress-bar>
          <c-progress-bar value="50" active></c-progress-bar>
          <hr></hr>
          <p>custom max value:</p>
          <c-progress-bar value="65" max="200"></c-progress-bar>
          <hr></hr>
          <p>colors:</p>
          <c-progress-bar value="20" type="primary"></c-progress-bar>
          <c-progress-bar value="30" type="info"></c-progress-bar>
          <c-progress-bar value="40" type="success"></c-progress-bar>
          <c-progress-bar value="50" type="danger"></c-progress-bar>
          <c-progress-bar value="60" type="warning"></c-progress-bar>
          <c-progress-bar value="70" type="#9b59b6"></c-progress-bar>
          <hr></hr>
          <p>sizes:</p>
          <c-progress-bar value="30" size="sm"></c-progress-bar>
          <c-progress-bar value="50"></c-progress-bar>
          <c-progress-bar value="80" size="lg"></c-progress-bar>
        </c-col>
        <c-col md="16">
          <% markdown %>
          ```html
          <c-progress-bar value="30" />
          <c-progress-bar value="50" active />

          <c-progress-bar value="65" max="200" />

          <c-progress-bar value="20" type="primary" />
          <c-progress-bar value="30" type="info" />
          <c-progress-bar value="40" type="success" />
          <c-progress-bar value="50" type="danger" />
          <c-progress-bar value="60" type="warning" />
          <c-progress-bar value="70" type="#9b59b6" />

          <c-progress-bar value="30" size="sm" />
          <c-progress-bar value="50" />
          <c-progress-bar value="80" size="lg" />
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>

      <hr />

      <h3>API</h3>
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
            <th>value</th>
            <td>how much of the rate of progress bar. It must be a valid floating point number between 0 and <code>max</code></td>
            <td>Number | String</td>
            <td>0</td>
          </tr>
          <tr>
            <th>max</th>
            <td>how much work the progress indicated. It must be a valid floating point number greater than zero</td>
            <td>Number | String</td>
            <td>0</td>
          </tr>
          <tr>
            <th>type</th>
            <td>the color of progress bar. There are five built-in modifiers: <code>primary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code> or use a valid hex color value.</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>size</th>
            <td>size of progress bar. It can be set to <code>sm</code> or <code>lg</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>active</th>
            <td>whether the bar is in progress</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

    <c-panel title="Progress Circle">
      <c-row gutter="20" align="middle">
        <c-col md="6" xs="12">
          <c-progress-circle class="u-center-block" value="80">80%</c-progress-circle>
        </c-col>
        <c-col md="6" xs="12">
          <c-progress-circle class="u-center-block" value="100" type="success" size="150">
            <i class="icon-checkmark u-color-success u-fs-48"></i>
          </c-progress-circle>
        </c-col>
        <c-col md="6" xs="12">
          <c-progress-circle class="u-center-block" value="56" type="warning">
            <span class="u-fs-16">56</span>
          </c-progress-circle>
        </c-col>
        <c-col md="6" xs="12">
          <c-progress-circle class="u-center-block" value="50" type="danger">
            <i class="icon-cross u-color-danger"></i>
          </c-progress-circle>
        </c-col>
      </c-row>

      <hr />

      <% markdown %>
      ```html
      <c-progress-circle value="80">80%</c-progress-circle>

      <c-progress-circle value="100" type="success" size="150">
        <i class="icon-checkmark u-color-success u-fs-48"></i>
      </c-progress-circle>

      <c-progress-circle value="56" type="warning">
        <span class="u-fs-16">56</span>
      </c-progress-circle>

      <c-progress-circle value="50" type="danger">
        <i class="icon-cross u-color-danger"></i>
      </c-progress-circle>
      ```
      <% endmarkdown %>

      <hr />

      <h3>API</h3>
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
            <th>value</th>
            <td>how much of the rate of progress. It must be a valid floating point number between 0 and <code>max</code></td>
            <td>Number | String</td>
            <td>0</td>
          </tr>
          <tr>
            <th>max</th>
            <td>how much work the progress indicated. It must be a valid floating point number greater than zero</td>
            <td>Number | String</td>
            <td>0</td>
          </tr>
          <tr>
            <th>type</th>
            <td>the color of progress. There are five built-in modifiers: <code>primary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code> or use a valid hex color value.</td>
            <td>String</td>
            <td>primary</td>
          </tr>
          <tr>
            <th>bg</th>
            <td>the stroke color of progress track</td>
            <td>String</td>
            <td>#e5e5e5</td>
          </tr>
          <tr>
            <th>size</th>
            <td>size of progress bar. It can be set to <code>sm</code> or <code>lg</code> or a valid number</td>
            <td>String | Number</td>
            <td>75</td>
          </tr>
          <tr>
            <th>line-width</th>
            <td>stroke width of progress track</td>
            <td>String | Number</td>
            <td>6</td>
          </tr>
          <tr>
            <th>line-cap</th>
            <td>the cap type of progress track, can be set to <code>round</code> or <code>square</code></td>
            <td>String</td>
            <td>round</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
