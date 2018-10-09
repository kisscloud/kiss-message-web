<script>
export default {
  name: 'FormLayoutsView',
  data() {
    return {
      selectVal: '1',
      selectOptions: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' }
      ]
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Field">

      <p>Use <code>c-form-field</code> component to group label, controls, help text or validation message. By default, its used in stacked form and applies <code>margin-bottom</code> to keep the spacing consistent.</p>

      <c-form-field label="Field label" help="Field help text here.">
        <c-form-input placeholder="Field control"></c-form-input>
      </c-form-field>

      <c-form-field label="Another Field label" help="Field help text here.">
        <c-form-select v-model="selectVal" :options="selectOptions"></c-form-select>
      </c-form-field>

      <c-form-field label="Error Label" help="Field help text here.">
        <c-form-input status="danger"></c-form-input>
        <small class="u-color-danger">Put validation message here.</small>
      </c-form-field>

      <hr />

      <% markdown %>
      ```html
      <c-form-field label="Field label" help="Field help text here.">
        <c-form-input placeholder="Field control"></c-form-input>
      </c-form-field>

      <c-form-field label="Error Label" help="Field help text here.">
        <c-form-input status="danger"></c-form-input>
        <small class="u-color-danger">Put validation message here.</small>
      </c-form-field>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Grid">

      <p>Combing with <code>grid</code>, you can create more complex forms.</p>

      <c-row>
        <c-col sm="12" md="6">
          <c-form-field label="Text">
            <c-form-input></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Number">
            <c-form-input type="number" addon-end="of 10"></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Email">
            <c-form-input type="email"></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Url">
            <c-form-input type="url" icon-start="icon-earth"></c-form-input>
          </c-form-field>
        </c-col>
      </c-row>
      <c-row>
        <c-col>
          <c-form-field label="Textarea">
            <c-form-textarea rows="2"></c-form-textarea>
          </c-form-field>
        </c-col>
      </c-row>

      <hr />

      <% markdown %>
      ```html
      <c-row>
        <c-col sm="12" md="6">
          <c-form-field label="Text">
            <c-form-input></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Number">
            <c-form-input type="number" addon-end="of 10"></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Email">
            <c-form-input type="email"></c-form-input>
          </c-form-field>
        </c-col>
        <c-col sm="12" md="6">
          <c-form-field label="Url">
            <c-form-input type="url" icon-start="icon-earth"></c-form-input>
          </c-form-field>
        </c-col>
      </c-row>
      <c-row>
        <c-col>
          <c-form-field label="Textarea">
            <c-form-textarea rows="2"></c-form-textarea>
          </c-form-field>
        </c-col>
      </c-row>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Form">

      <p><code>c-form</code> functional component is only a wrapper of <code>&lt;form&gt;</code> html element with predefined common form layouts.</p>

      <h3>Stacked Form</h3>

      <p>By default, <code>c-form</code> use stacked layout.</p>

      <c-form>
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password"></c-form-input>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>

      <% markdown %>
      ```html
      <c-form>
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password"></c-form-input>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>
      ```
      <% endmarkdown %>

      <hr />

      <h3>Horizontal Form</h3>

      <p>By setting <code>layout</code> prop to <code>horizontal</code> to create horizontal layout form, and you also can set <code>span</code> prop to any numeric value to adjust label width.</p>

      <c-note type="info">
        <p>If you want to use horizontal layout form, you are only allowed to use <code>c-form-field</code> component as child of <code>c-form</code></p>
      </c-note>

      <c-form layout="horizontal">
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password" status="danger"></c-form-input>
          <small class="u-color-danger">Your password is not strong enough.</small>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>

      <% markdown %>
      ```html
      <c-form layout="horizontal" span="220">
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password" status="danger"></c-form-input>
          <small class="u-color-danger">Your password is not strong enough.</small>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>
      ```
      <% endmarkdown %>

      <hr />

      <h3>Inline Form</h3>

      <p>By setting <code>layout</code> prop to <code>inline</code> to display a series of group elements on a single horizontal row.</p>

      <c-form layout="inline">
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password"></c-form-input>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>

      <br />

      <% markdown %>
      ```html
      <c-form layout="inline">
        <c-form-field label="Username">
          <c-form-input type="text"></c-form-input>
        </c-form-field>

        <c-form-field label="Password">
          <c-form-input type="password"></c-form-input>
        </c-form-field>

        <c-form-field>
          <c-form-checkbox label="Remember Me?"></c-form-checkbox>
        </c-form-field>

        <c-form-field>
          <c-button type="primary" smart>Submit</c-button>
        </c-form-field>
      </c-form>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form</code></h3>

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
            <th>layout</th>
            <td>can be set to <code>horizontal</code> or <code>inline</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>span</th>
            <td>the width of form field label, when in horizontal layout mode.</td>
            <td>String | Number</td>
            <td>220</td>
          </tr>
          <tr>
            <th>tag</th>
            <td>html tag name</td>
            <td>String</td>
            <td>form</td>
          </tr>
        </tbody>
      </table>

    </c-panel>
  </c-main>
</template>
