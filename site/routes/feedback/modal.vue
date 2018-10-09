<script>
export default {
  name: 'ModalView',
  data() {
    return {
      topOpen: false,
      centerOpen: false,
      leftOpen: false,
      rightOpen: false,
      smallOpen: false,
      largeOpen: false,
      slotOpen: false
    };
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <div class="l-row">
      <div class="l-col-12@md">
        <c-panel title="Basic Modal">
          <p>
            <c-button type="primary" @click="centerOpen = true" v-once smart>Open</c-button>
          </p>
          <% markdown %>
          ```html
          <template>
            <c-button type="primary" @click="open = true" smart>Open</c-button>

            <c-modal title="Modal Title" v-model="open">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim explicabo praesentium, quis ratione laboriosam!
              <div class="u-text-right" slot="footer">
                <c-button type="primary" @click="open = false" smart>Confirm</c-button>
              </div>
            </c-modal>
          </template>

          <script>
            export default {
              data() {
                return {
                  open: false
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Left panel modal">
          <p>
            <c-button type="primary" @click="leftOpen = true" v-once smart>Open</c-button>
          </p>
          <% markdown %>
          ```html
          <template>
            <c-button type="primary" @click="leftOpen = true" smart>Open</c-button>

            <c-modal title="Modal Title" placement="left" v-model="leftOpen">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
              <div class="u-text-right" slot="footer">
                <c-button type="primary" @click="leftOpen = false" v-once smart>Confirm</c-button>
              </div>
            </c-modal>
          </template>

          <script>
            export default {
              data() {
                return {
                  leftOpen: false
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Sizes">
          <c-button type="primary" @click="smallOpen = true" smart>Open Small</c-button>
          <c-button type="primary" @click="largeOpen = true" smart>Open Large</c-button>
        </c-panel>
      </div>

      <div class="l-col-12@md">
        <c-panel title="Modal enter from top">
          <p>
            <c-button type="primary" @click="topOpen = true" v-once smart>Open</c-button>
          </p>
          <% markdown %>
          ```html
          <template>
            <c-button type="primary" @click="open = true" smart>Open</c-button>

            <c-modal title="Modal Title" placement="top" v-model="open">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim explicabo praesentium, quis ratione laboriosam!
              <div class="u-text-right" slot="footer">
                <c-button type="primary" @click="open = false" smart>Confirm</c-button>
              </div>
            </c-modal>
          </template>

          <script>
            export default {
              data() {
                return {
                  open: false
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Right panel modal">
          <p>
            <c-button type="primary" @click="rightOpen = true" smart>Open</c-button>
          </p>
          <% markdown %>
          ```html
          <template>
            <c-button type="primary" @click="rightOpen = true" smart>Open</c-button>

            <c-modal title="Modal Title" placement="right" v-model="rightOpen">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
              <div class="u-text-left" slot="footer">
                <c-button type="primary" @click="rightOpen = false" v-once smart>Confirm</c-button>
              </div>
            </c-modal>
          </template>

          <script>
            export default {
              data() {
                return {
                  rightOpen: false
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-panel>
        <c-panel title="Slots">
          <c-button type="primary" @click="slotOpen = true" smart>Open</c-button>
        </c-panel>
      </div>
    </div>

    <c-modal title="Modal Title" v-model="centerOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-right" slot="footer">
        <c-button type="primary" @click="centerOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title" size="sm" v-model="smallOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-right" slot="footer">
        <c-button type="primary" @click="smallOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title<sup class='badge badge--danger'>Large</sup>" size="lg" v-model="largeOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-right" slot="footer">
        <c-button type="primary" @click="largeOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title" placement="top" v-model="topOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero enim explicabo praesentium, quis ratione laboriosam!
      <div class="u-text-right" slot="footer">
        <c-button type="primary" @click="topOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title" placement="left" v-model="leftOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-right" slot="footer">
        <c-button type="primary" @click="leftOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title" placement="right" v-model="rightOpen">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-left" slot="footer">
        <c-button type="primary" @click="rightOpen = false" v-once smart>Confirm</c-button>
      </div>
    </c-modal>

    <c-modal title="Modal Title" v-model="slotOpen">
      <h2 class="u-text-center" slot="header">Are you ok?</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum esse suscipit molestiae nostrum vitae, dolores reprehenderit, dolore quis quia?
      <div class="u-text-center" slot="footer">
        <button class="btn btn--ghost">No</button>
        <button class="btn btn--smart btn--primary">Yes</button>
      </div>
    </c-modal>

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
            <td>v-model</td>
            <td>control the visibility of modal</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>the title of modal</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>whether show the &times; button</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>the placement of modal, <code>center</code>, <code>top</code>, <code>left</code>, <code>right</code></td>
            <td>String</td>
            <td>center</td>
          </tr>
          <tr>
            <td>mask</td>
            <td>whether to show backdrop mask</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>close-on-click-mask</td>
            <td>whether popup can be closed by clicking the mask</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>className</td>
            <td>class name attach to modal element</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>transition</td>
            <td>the entering/leaving transition name of component, <code>zoom</code>, <code>fade</code>, <code>slideleft</code>, <code>slideright</code>, <code>slidedown</code></td>
            <td>String</td>
            <td>zoom</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered">
        <caption>Slot</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>content of Modal body</td>
          </tr>
          <tr>
            <td>header</td>
            <td>content of Modal header, this will replace the title of modal</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>fontent of Modal footer</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered">
        <caption>Events</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shown</td>
            <td>trigger after modal has been shown</td>
            <td>-</td>
          </tr>
          <tr>
            <td>hidden</td>
            <td>trigger after modal has been hidden</td>
            <td>-</td>
          </tr>
          <tr>
            <td>click-mask</td>
            <td>trigger when user click backdrop mask</td>
            <td><code>event</code> - mouse click event</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
