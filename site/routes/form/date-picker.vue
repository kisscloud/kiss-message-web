<script>
import FlatPickr from 'cover/vendors/flatpickr';
export default {
  name: 'DatePickerView',
  components: {
    [FlatPickr.name]: FlatPickr
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="DatePicker">
      <p>
        <code>c-flatpickr</code> component is just a wrapper of <a href="https://chmln.github.io/flatpickr/">FlatPickr</a> date-time picker plugin. It create a proxy for <strong>FlatPicker</strong>, so you can use it in the vue-way easily.
      </p>

      <c-note type="warning">
        <strong>Vendor Component</strong>: a vendor component needs a third-party plugin, which would increase the size of your bundle file, so we separte it from the core of cover. If you want to use vendor component, you must import it specifically.
      </c-note>
    </c-panel>

    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <div class="u-mb-15">
            <c-flatpickr placeholder="Select Date..." value="1993-01-18"></c-flatpickr>
          </div>

          <p>Basic date picker.</p>
          <% markdown %>
          ```html
          <template>
            <c-flatpickr placeholder="Select Date..." v-model="birthDay" />
          </template>

          <script>
            import FlatPickr from 'cover/vendors/flatpickr'
            export default {
              components: {
                [FlatPickr.name]: FlatPickr
              },
              data() {
                return {
                  birthDay: '1993-01-18'
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="minDate and maxDate">
          <div class="u-mb-15">
            <c-flatpickr min="2018-02-15" value="2018-02-15" max="2018-02-25"></c-flatpickr>
          </div>

          <p>By setting <code>min</code> and <code>max</code> props to specifies the minimum/maximum date (inclusively) allowed for selection.</p>

          <% markdown %>
          ```html
          <template>
            <c-flatpickr min="2018-02-15" v-model="birthDay" max="2018-02-25" />
          </template>

          <script>
            import FlatPickr from 'cover/vendors/flatpickr'
            export default {
              components: {
                [FlatPickr.name]: FlatPickr
              },
              data() {
                return {
                  birthDay: '2018-02-16'
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Range dates">
          <div class="u-mb-15">
            <c-flatpickr range></c-flatpickr>
          </div>

          <p>Add <code>range</code> prop to enable selecting a range of dates.</p>

          <% markdown %>
          ```html
          <template>
            <c-flatpickr v-model="workDates" range />
          </template>

          <script>
            import FlatPickr from 'cover/vendors/flatpickr'
            export default {
              components: {
                [FlatPickr.name]: FlatPickr
              },
              data() {
                return {
                  workDates: ['2018-02-15', '2018-02-20']
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="DateTime">
          <div class="u-mb-15">
            <c-flatpickr value="2018-02-15 08:25" format="Y-m-d H:i" with-time></c-flatpickr>
          </div>
          <div class="u-mb-15">
            <c-flatpickr only-time format="H:i" min="11:00" max="14:30" value="12:00"></c-flatpickr>
          </div>

          <p>Add <code>with-time</code> prop to enable date-time format. Or add <code>only-time</code> prop to allow select time only.</p>
          <p>In <code>only-time</code> mod, you can combine it with <code>min</code>, <code>max</code> props to limit time.</p>
          <% markdown %>
          ```html
          <template>
            <c-flatpickr with-time format="Y-m-d H:i" v-model="birthDay" />
            <c-flatpickr only-time format="H:i" min="11:00" max="14:30" v-model="partyTime" />
          </template>

          <script>
            import FlatPickr from 'cover/vendors/flatpickr'
            export default {
              components: {
                [FlatPickr.name]: FlatPickr
              },
              data() {
                return {
                  birthDay: '1993-01-18',
                  partyTime: '12:00'
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Selecting multiple dates">
          <div class="u-mb-15">
            <c-flatpickr multiple></c-flatpickr>
          </div>

          <p>Add <code>multiple</code> prop to enable selecting multiple dates.</p>
          <% markdown %>
          ```html
          <template>
            <c-flatpickr v-model="partyDates" multiple />
          </template>

          <script>
            import FlatPickr from 'cover/vendors/flatpickr'
            export default {
              components: {
                [FlatPickr.name]: FlatPickr
              },
              data() {
                return {
                  partyDates: ['2018-02-16', '2018-02-17']
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
            <td>value</td>
            <td>Initial selected date</td>
            <td>string/Date</td>
            <td>-</td>
          </tr>
          <tr>
            <td>min</td>
            <td>The minimum date that a user can start picking from</td>
            <td>string/Date</td>
            <td>-</td>
          </tr>
          <tr>
            <td>max</td>
            <td>The maximum date that a user can pick to</td>
            <td>string/Date</td>
            <td>-</td>
          </tr>
          <tr>
            <td>range</td>
            <td>Enables a range of dates select</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>Enables multiple dates select</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>with-time</td>
            <td>Enables time picker</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>only-time</td>
            <td>No calendar, only time picker</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>The placeholder text of date picker</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>Allows the user to enter a date directly input the input field</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Whethor disable the date picker or not</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>format</td>
            <td>A string of characters which are used to define how the date will be displayed in the input box.</td>
            <td>string</td>
            <td>"Y-m-d"</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>icon class name for icon at the start of input, click to toggle date picker</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>clearable</th>
            <td>Whether show a clear button.</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>inline</td>
            <td>Displays the calendar inline</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>config</td>
            <td>The Flatpickr config <a href="https://chmln.github.io/flatpickr/options/">Options</a></td>
            <td>object</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
