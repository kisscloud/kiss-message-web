<script>
export default {
  name: 'SliderView',
  data() {
    return {
      price: 25,
      priceRange: [25, 50],
      bucket: 25,
      bucketRange: [25, 50],
      quantity: 25
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <c-slider class="u-mb-30" v-model="price"></c-slider>
          <c-slider v-model="quantity" color="#ff9800"></c-slider>

          <hr />
          <% markdown %>
          ```html
          <template>
            <c-slider v-model="price" />
            <c-slider v-model="quantity" color="#ff9800" />
          </template>

          <script>
            export default {
              data() {
                return {
                  price: 25
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>

        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Range">
          <c-slider v-model="priceRange" range></c-slider>

          <hr />

          <% markdown %>
          ```html
          <template>
            <c-slider v-model="priceRange" range />
          </template>

          <script>
            export default {
              data() {
                return {
                  priceRange: [25, 50]
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Steps">
          <c-slider class="u-mb-30" v-model="bucket" :step="10"></c-slider>
          <c-slider v-model="bucketRange" :step="10" :dots="true" :range="true"></c-slider>

          <hr />

          <% markdown %>
          ```html
          <template>
            <c-slider v-model="bucket" :step="10"></c-slider>
            <c-slider v-model="bucketRange" :step="10" :dots="true" :range="true"></c-slider>
          </template>

          <script>
            export default {
              data() {
                return {
                  bucket: 25,
                  bucketRange: [25, 50]
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Disabled">
          <c-slider :value="25" disabled></c-slider>

          <% markdown %>
          ```html
          <template>
            <c-slider v-model="price" disabled></c-slider>
          </template>

          <script>
            export default {
              data() {
                return {
                  price: 25
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
      <h3><code class="u-fs-18">c-slider</code></h3>
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
            <td>the value of slider, when <code>range</code> is false, use <code>number</code>, otherwise, use <code>[number, number]</code></td>
            <td>Number | Number[]</td>
            <td>0</td>
          </tr>
          <tr>
            <th>disabled</th>
            <td>whether to disable slider</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>min</th>
            <td>the minimum value the slider can slide from.</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <th>max</th>
            <td>The maximum value the slider can slide to</td>
            <td>Number</td>
            <td>100</td>
          </tr>
          <tr>
            <th>step</th>
            <td>The granularity the slider can step through</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <th>dots</th>
            <td>whether to show step indicators</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>range</th>
            <td>dual thumb mode</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <th>color</th>
            <td>slider background color</td>
            <td>String</td>
            <td>#1BB934</td>
          </tr>
          <tr>
            <th>format</th>
            <td>slider will pass its value to <code>format</code>, and display its value in tooltip.</td>
            <td>Function</td>
            <td>(val) => {return val}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered table--stress">
        <caption>Events</caption>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Arguments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>input</th>
            <td>Callback function that is fired when the user changes the slider's value</td>
            <td><code>newValue</code>: Number | Number[]</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
