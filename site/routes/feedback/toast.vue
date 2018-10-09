<script>
export default {
  name: 'ToastView',
  data() {
    return {
      show: true
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    info() {
      this.$toast.info('Are you ok?');
    },
    succeed() {
      this.$toast.succeed('Operation succeed!');
    },
    failed() {
      this.$toast.failed('Delete failed!');
    },
    warn() {
      this.$toast.warn('Are you sure?');
    },
    loading() {
      const vm = this.$toast.loading();
      setTimeout(() => {
        vm.hide();
      }, 3000);
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Toast">
      <c-row>
        <c-col sm="12">
          <c-box title="Example">
            <div style="position:relative;height:400px;">
              <c-toast v-show="show" icon="alert">Are you ok?</c-toast>
            </div>
          </c-box>
        </c-col>
        <c-col sm="12">
          <c-button type="primary" @click="toggle">Toggle</c-button>

          <p><strong>Toast</strong> component provide a simple way to give user a feedback info.</p>

          <p>You can toggle whether to show it with <code>v-show</code>/<code>v-if</code> directive depend on what action does user take.</p>
          <% markdown %>
          ```html
          <template>
            <div style="position:relative;width:400px;height:400px;">
              <c-button @click="toggle">Toggle</c-button>

              <c-toast v-show="show" icon="alert">Are you ok?</c-toast>
            </div>
          </template>

          <script>
            export default {
              data() {
                return {
                  show: false
                }
              },
              methods: {
                toggle() {
                  this.show = !this.show
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Dynamic Creation">
      <c-row>
        <c-col sm="12" md="8">
          <c-box title="Info">
            <c-button type="primary" @click="info" smart>Info</c-button>
            <br><br>

            <p>Use <code>this.$toast.info</code> plugin method in your Vue component to create a info toast.</p>
            <% markdown %>
            ```javascript
            export default {
              methods: {
                info() {
                  this.$toast.info('Are you ok?', 2000)
                }
              }
            }
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col sm="12" md="8">
          <c-box title="Succeed">
            <c-button type="primary" @click="succeed" smart>Succeed</c-button>
            <br><br>

            <p>Use <code>this.$toast.succeed</code> plugin method in your Vue component to create a succeed toast.</p>
            <% markdown %>
            ```javascript
            export default {
              methods: {
                succeed() {
                  this.$toast.succeed('Operation succeed!', 2000)
                }
              }
            }
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col sm="12" md="8">
          <c-box title="Failed">
            <c-button type="primary" @click="failed" smart>Failed</c-button>
            <br><br>

            <p>Use <code>this.$toast.failed</code> plugin method in your Vue component to create a failed toast.</p>
            <% markdown %>
            ```javascript
            export default {
              methods: {
                failed() {
                  this.$toast.failed('Delete failed!', 2000)
                }
              }
            }
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col sm="12" md="8">
          <c-box title="Warn">
            <c-button type="primary" @click="warn" smart>Warn</c-button>
            <br><br>

            <p>Use <code>this.$toast.warn</code> plugin method in your Vue component to create a warn toast.</p>
            <% markdown %>
            ```javascript
            export default {
              methods: {
                warn() {
                  this.$toast.warn('Are you sure?', 2000)
                }
              }
            }
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
        <c-col sm="12" md="8">
          <c-box title="Loading">
            <c-button type="primary" @click="loading" smart>Loading</c-button>
            <br><br>

            <p>Use <code>this.$toast.loading</code> plugin method in your Vue component to create a loading toast.</p>

            <% markdown %>
            ```javascript
            export default {
              methods: {
                loading() {
                  const vm = this.$toast.loading('Loading...')
                  setTimeout(() => {
                    vm.hide()
                  }, 3000)
                }
              }
            }
            ```
            <% endmarkdown %>
          </c-box>
        </c-col>
      </c-row>
    </c-panel>

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
            <td>icon</td>
            <td>can be set to <code>alert</code>, <code>check</code>, <code>close</code>, <code>spinner</code></td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <table class="table table--bordered">
        <caption>Plugin Methods</caption>
        <thead>
          <tr>
            <th>method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>this.$toast.info(content = '', duration = 2000)</code></td>
            <td>Dynamiclly create a info toast</td>
          </tr>
          <tr>
            <td><code>this.$toast.succeed(content = '', duration = 2000)</code></td>
            <td>Dynamiclly create a succeed toast</td>
          </tr>
          <tr>
            <td><code>this.$toast.failed(content = '', duration = 2000)</code></td>
            <td>Dynamiclly create a failed toast</td>
          </tr>
          <tr>
            <td><code>this.$toast.warn(content = '', duration = 2000)</code></td>
            <td>Dynamiclly create a warn toast</td>
          </tr>
          <tr>
            <td><code>this.$toast.loading(content = '')</code></td>
            <td>Dynamiclly create a loading toast</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

  </c-main>
</template>
