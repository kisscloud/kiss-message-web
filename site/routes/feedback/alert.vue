<script>
export default {
  name: 'AlertView',
  methods: {
    showAlert() {
      this.$alert({
        type: 'success',
        title: 'Success',
        content: 'Delete data succeed!',
        onConfirm: () => {
          if (confirm) {
            this.$toast.info('You clicked confirm');
          }
        }
      });
    },
    showConfirm() {
      this.$alert({
        type: 'info',
        title: 'Info',
        content: 'Are you sure you want to do this?',
        showCancel: true,
        onConfirm: () => {
          this.$toast.info('You clicked confirm');
        },
        onCancel: () => {
          this.$toast.info('You clicked cancel');
        }
      });
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col sm="12">
        <c-panel title="Alert">
          <c-button type="primary" @click="showAlert">Open</c-button>
          <br><br>

          <p><strong>Alert</strong> plugin method makes popup messages easy and pretty.</p>
          <% markdown %>
          ```javascript
          export default {
            methods: {
              showAlert() {
                this.$alert({
                  type: 'success',
                  title: 'Success',
                  content: 'Delete data succeed!',
                  onConfirm: () => {
                    // do something..
                    // if you want to stop closing alert, just return false
                  }
                })
              }
            }
          }
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
      <c-col sm="12">
        <c-panel title="Confirm">
          <c-button type="primary" @click="showConfirm">Open</c-button>
          <br><br>
          <% markdown %>
          ```javascript
          export default {
            methods: {
              showConfirm() {
                this.$alert({
                  type: 'info',
                  title: 'Info',
                  content: 'Are you sure you want to do this?',
                  showCancel: true,
                  onConfirm: () => {
                    // do something..
                    // if you want to stop closing alert, just return false
                  },
                  onCancel: () => {
                    // do something..
                    // if you want to stop closing alert, just return false
                  }
                })
              }
            }
          }
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

    <c-panel title="API">
      <table class="table table--bordered">
        <caption>arguments</caption>
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
            <td>can be set to <code>info</code>, <code>error</code>, <code>success</code>, <code>warning</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>dialog title</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
            <td>dialog content</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>showCancel</td>
            <td>whether show cancel button</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>cancelText</td>
            <td>the text on cancel button</td>
            <td>string</td>
            <td>Cancel</td>
          </tr>
          <tr>
            <td>confirmText</td>
            <td>the text on confirm button</td>
            <td>string</td>
            <td>Confirm</td>
          </tr>
          <tr>
            <td>onConfirm</td>
            <td>the callback function, when user click confirm button</td>
            <td>Function</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onCancel</td>
            <td>the callback function, when user click cancel button</td>
            <td>Function</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
