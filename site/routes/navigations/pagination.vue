<script>
export default {
  name: 'PaginationView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <c-pagination class="u-mb-15" :pager="false" :total="50"></c-pagination>

          <p>Pagination component provide a reuseable and flexible navigation that lets users access pages of content.</p>
          <% markdown %>
          ```html
          <template>
            <c-pagination :value="paged" @input="selectPage" :pager="false" :total="total" />
          </template>

          <script>
            export default {
              data() {
                return {
                  paged: 1,
                  total: 50
                }
              },
              methods: {
                selectPage(paged) {
                  // do something
                  this.paged = paged
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Navigator">
          <c-pagination class="u-mb-15" :pager="true" :jumper="true" :total="50"></c-pagination>

          <p>You can set <code>pager</code>, <code>jumper</code> props to show or hide pagination navigators.</p>
          <% markdown %>
          ```html
          <template>
            <c-pagination :value="paged" @input="selectPage" :pager="true" :jumper="true" :total="total" />
          </template>

          <script>
            export default {
              data() {
                return {
                  paged: 1,
                  total: 50
                }
              },
              methods: {
                selectPage(paged) {
                  // do something
                  this.paged = paged
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
    </c-row>
    <c-row>
      <c-col md="12">
        <c-panel title="Range">
          <c-pagination class="u-mb-15" :range="5" :total="50"></c-pagination>

          <p>By setting <code>range</code> prop to decide how many items you want to show in truncated mode, default is <code>2</code>.</p>
          <% markdown %>
          ```html
          <template>
            <c-pagination class="u-mb-15" v-model="paged" :range="5" :pager="false" :total="50" />
          </template>

          <script>
            export default {
              data() {
                return {
                  paged: 1,
                  total: 50
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col md="12">
        <c-panel title="Size">
          <c-pagination class="u-mb-15" size="sm" :total="50"></c-pagination>

          <p>Use the <code>size</code> attribute property to change pagination sizes, its value can be <code>sm</code> or empty.</p>
          <% markdown %>
          ```html
          <c-pagination size="sm" :total="50" />
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Type">
          <c-pagination class="u-mb-15" type="bordered" :total="50"></c-pagination>

          <p>Use the <code>type</code> attribute property to create different type pagination, its value can be <code>bordered</code> or empty.</p>
          <% markdown %>
          ```html
          <c-pagination type="bordered" :total="50" />
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
            <td>can be set to <code>bordered</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>set the size of pagination, can be set to <code>sm</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>sync the current paged</td>
            <td>number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>total</td>
            <td>total count of page</td>
            <td>number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>prev</td>
            <td>the text of previous button</td>
            <td>string</td>
            <td>Previous</td>
          </tr>
          <tr>
            <td>next</td>
            <td>the text of next button</td>
            <td>string</td>
            <td>Next</td>
          </tr>
          <tr>
            <td>pager</td>
            <td>whether to show previous/next button</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>jumper</td>
            <td>whether to show page select jumper</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
