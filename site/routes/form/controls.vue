<script>
export default {
  name: 'FormControlsView',
  data() {
    return {
      gender: 'male',
      remember: false,
      enableNotification: false,
      selectVal: '1',
      txt: '',
      selectMultipleVal: ['1', '2'],
      clearVal: 'www.duckduckgo.com',
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
    <c-panel title="Input">

      <p><code>c-form-input</code> component provide all the native html input capability and with more useful features.</p>

      <c-form-field label="Basic">
        <c-form-input placeholder="Write something nice..." v-model="txt"></c-form-input>
      </c-form-field>
      <c-form-field>
        <c-form-input placeholder="Write something nice..." v-model="txt"></c-form-input>
      </c-form-field>
      <% markdown %>
      ```html
        <c-form-input placeholder="Write something nice..." />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="Readonly">
        <c-form-input readonly value="Hello!"></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input readonly value="Hello!" />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="Disabled">
        <c-form-input value="You can not change me!" disabled></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input value="You can not change me!" disabled />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="With start and end icons">
        <c-form-input placeholder="Enter your password..." type="password" icon-start="icon-lock" icon-end="icon-eye"></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input placeholder="Enter your password..." type="password" icon-start="icon-lock" icon-end="icon-eye" />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="With prefix addon and suffix addon">
        <c-form-input type="number" addon-start="Price:" addon-end="Bitcoin"></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input type="number" addon-start="Price:" addon-end="Bitcoin" />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="Clearable">
        <c-form-input type="url" addon-start="https://" v-model="clearVal" clearable></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input type="url" addon-start="https://" value="www.duckduckgo.com" clearable />
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="Sizes">
        <c-form-input class="u-mb-15" size="sm" value="Small"></c-form-input>
        <c-form-input class="u-mb-15" value="Normal"></c-form-input>
        <c-form-input class="u-mb-15" size="lg" value="Large"></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input class="u-mb-15" size="sm" value="Small"></c-form-input>
        <c-form-input class="u-mb-15" value="Normal"></c-form-input>
        <c-form-input class="u-mb-15" size="lg" value="Large"></c-form-input>
      ```
      <% endmarkdown %>

      <hr />

      <c-form-field label="Status">
        <c-form-input class="u-mb-15" status="danger" value="Danger"></c-form-input>
        <c-form-input class="u-mb-15" status="warning" value="Warning"></c-form-input>
        <c-form-input class="u-mb-15" status="success" value="Success"></c-form-input>
      </c-form-field>

      <% markdown %>
      ```html
        <c-form-input class="u-mb-15" status="danger" value="Danger" />
        <c-form-input class="u-mb-15" status="warning" value="Warning" />
        <c-form-input class="u-mb-15" status="success" value="Success" />
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-input</code></h3>

      <table class="table table--bordered">
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
            <td>value of input. (ps: you can use <code>v-model</code> to sync the value)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>type</th>
            <td>type of input, support all html native input types.</td>
            <td>String</td>
            <td>text</td>
          </tr>
          <tr>
            <th>status</th>
            <td>can be set to <code>danger</code>, <code>warning</code>, <code>success</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>icon-start</th>
            <td>icon class name for icon at the start of input</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>icon-end</th>
            <td>icon class name for icon at the end of input</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>addon-start</th>
            <td>prefix text of input</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>addon-end</th>
            <td>suffix text of input</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>size</th>
            <td>can be set to <code>sm</code> or <code>lg</code></td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th>clearable</th>
            <td>Whether show a clear button.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th><em>...all input attributes</em></th>
            <td>All html native input attributes and events are supported, etc: <code>disabled</code>, <code>maxlength</code>, <code>readonly</code>, <code>name</code>, <code>v-on:focus</code></td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <table class="table table--bordered">
        <caption>Events</caption>
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
            <th>change</th>
            <td>triggers when Input value change</td>
            <td>event</td>
          </tr>
          <tr>
            <th>blur</th>
            <td>triggers when Input blurs</td>
            <td>event</td>
          </tr>
          <tr>
            <th>focus</th>
            <td>triggers when Input focuses</td>
            <td>event</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

    <c-panel title="Select">

      <c-form-field label="Normal">
        <c-form-select
          v-model="selectVal"
          :options="selectOptions"></c-form-select>
      </c-form-field>

      <c-form-field label="Disabled">
        <c-form-select
          disabled
          v-model="selectVal"
          :options="selectOptions"></c-form-select>
      </c-form-field>

      <c-form-field label="Multiple">
        <c-form-select
          multiple
          v-model="selectMultipleVal"
          :options="selectOptions"></c-form-select>
      </c-form-field>

      <hr />

      <% markdown %>
      ```html
      <template>
        <div>
          <c-form-select v-model="selectVal" :options="selectOptions" />

          <c-form-select disabled v-model="selectVal" :options="selectOptions" />

          <c-form-select multiple v-model="selectMultipleVal" :options="selectOptions" />
        </div>
      </template>

      <script>
        export default {
          data() {
            return {
              selectVal: '1',
              selectMultipleVal: ['1', '2'],
              selectOptions: [
                {value: '1', label: 'Option 1'},
                {value: '2', label: 'Option 2'},
                {value: '3', label: 'Option 3'},
                {value: '4', label: 'Option 4'},
              ]
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-select</code></h3>
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
              <td>select values. (ps: you can use <code>v-model</code> to sync the value)</td>
              <td>String | Array</td>
              <td>-</td>
            </tr>
            <tr>
              <th>status</th>
              <td>can be set to <code>danger</code>, <code>warning</code>, <code>success</code></td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th>size</th>
              <td>can be set to <code>sm</code> or <code>lg</code></td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th><em>...all select attributes</em></th>
              <td>All html native select attributes are supported, etc: <code>disabled</code>, <code>name</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

      </c-panel>

      <c-panel title="Textarea">

      <c-form-field>
        <c-form-textarea></c-form-textarea>
      </c-form-field>

      <% markdown %>
      ```html
      <c-form-textarea />
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-textarea</code></h3>
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
              <td>select values. (ps: you can use <code>v-model</code> to sync the value)</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th>status</th>
              <td>can be set to <code>danger</code>, <code>warning</code>, <code>success</code></td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th><em>...all textarea attributes</em></th>
              <td>All html native textarea attributes are supported, etc: <code>disabled</code>, <code>name</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

      </c-panel>

      <c-panel title="Radio">

      <c-form-radio name="gender" v-model="gender" value="male" label="Male"></c-form-radio>
      <c-form-radio name="gender" v-model="gender" value="female" label="Female"></c-form-radio>
      <c-form-radio name="gender" v-model="gender" value="alien" label="Alien (disabled)" disabled></c-form-radio>

      <hr />

      <% markdown %>
      ```html
      <template>
        <div>
          <c-form-radio name="gender" v-model="gender" value="male" label="Male" />
          <c-form-radio name="gender" v-model="gender" value="female" label="Female" />
          <c-form-radio name="gender" v-model="gender" value="alien" label="Alien" disabled />
        </div>
      </template>

      <script>
        export default {
          data() {
            return {
              gender: 'male'
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-radio</code></h3>
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
              <th>v-model</th>
              <td>sync the checked value.</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th>value</th>
              <td>value of radio</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th>label</th>
              <td>description text</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th><em>...all input attributes</em></th>
              <td>All html native radio input attributes and events are supported, etc: <code>disabled</code>, <code>name</code>, <code>v-on:change</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

      </c-panel>

      <c-panel title="Checkbox">

        <c-form-checkbox label="Remember Me?" v-model="remember"></c-form-checkbox>

        <hr />

        <% markdown %>
        ```html
        <template>
          <div>
            <c-form-checkbox label="Remember Me?" v-model="remember" />
          </div>
        </template>

        <script>
          export default {
            data() {
              return {
                remember: false
              }
            }
          }
        </script>
        ```
        <% endmarkdown %>

        <hr />

        <h3><code class="u-fs-18">c-form-checkbox</code></h3>
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
              <th>v-model</th>
              <td>sync the checked status.</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <th>label</th>
              <td>description text</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <th><em>...all input attributes</em></th>
              <td>All html native checkbox input attributes and events are supported, etc: <code>disabled</code>, <code>name</code>, <code>v-on:change</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

      </c-panel>

    <c-panel title="Switch">

      <c-form-switch v-model="enableNotification" label="Enable notification"></c-form-switch>

      <p>Same as <code>form-checkbox</code> component, just has a different appearance.</p>

      <% markdown %>
      ```html
      <template>
        <div>
          <c-form-switch label="Enable notification" v-model="notification" />
        </div>
      </template>

      <script>
        export default {
          data() {
            return {
              notification: false
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-switch</code></h3>
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
            <th>v-model</th>
            <td>sync the checked status.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>label</th>
            <td>description text</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <th><em>...all input attributes</em></th>
            <td>All html native checkbox input attributes and events are supported, etc: <code>disabled</code>, <code>name</code>, <code>v-on:change</code></td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      </c-panel>

      <c-panel title="Counter">

      <c-form-counter :max="10" :min="-5" :step="1"></c-form-counter>

      <hr />

      <% markdown %>
      ```html
      <template>
        <div>
          <c-form-counter :max="10" :min="-5" :step="1" v-model="quantity" />
        </div>
      </template>

      <script>
        export default {
          data() {
            return {
              quantity: 0
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>

      <hr />

      <h3><code class="u-fs-18">c-form-counter</code></h3>
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
            <td>value of counter. (ps: you can use <code>v-model</code> to sync the value)</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>step</th>
            <td>step value</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <th>min</th>
            <td>minimum value of counter</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>max</th>
            <td>maximum value of counter</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>editable</th>
            <td>whether user can manually input number.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>disabled</th>
            <td>whether change into disabled status.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

    </c-panel>
  </c-main>
</template>
