<script>
export default {
  name: 'MenuView',
  data() {
    return {
      theme: '',
      themeOptions: [
        { value: '', label: 'Default' },
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' }
      ]
    };
  },
  computed: {
    wrapperStyle() {
      return {
        padding: '8px',
        backgroundColor: this.theme === 'dark' ? '#17141D' : this.theme === 'light' ? '#7872ff' : '#fafafa'
      };
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Basic">
      <c-row gutter="20">
        <c-col md="7" lg="5" xl="3">
          <div :style="wrapperStyle">
            <c-menu :theme="theme">
              <c-menu-heading label="General"></c-menu-heading>
              <c-menu-item index="dashboard" icon="icon-grid" label="Dashboard"></c-menu-item>
              <c-submenu icon="icon-quill2" label="Articles">
                <c-menu-item index="articles-all" label="All">
                  <c-badge type="info">32</c-badge>
                </c-menu-item>
                <c-menu-item index="articles.add" label="Add New"></c-menu-item>
                <c-menu-item index="articles.draft" label="Draft">
                  <c-badge>3</c-badge>
                </c-menu-item>
                <c-menu-item index="articles.trash" label="Trash">
                  <c-badge>6</c-badge>
                </c-menu-item>
              </c-submenu>
              <c-menu-item index="pages" icon="icon-file-empty" label="Pages"></c-menu-item>
              <c-menu-item index="comments" icon="icon-bubbles" label="Comments">
                <c-badge type="danger">78</c-badge>
              </c-menu-item>
              <c-menu-divider></c-menu-divider>
              <c-menu-item index="media" icon="icon-images3" label="Media Library"></c-menu-item>
              <c-menu-divider></c-menu-divider>
              <c-menu-item index="messages" icon="icon-envelop2" label="Messages">
                <c-badge type="danger">12</c-badge>
              </c-menu-item>
              <c-menu-item index="users" icon="icon-users" label="Users">
                <c-badge type="info">+37</c-badge>
              </c-menu-item>
              <c-menu-item index="tasks" icon="icon-file-check" label="Tasks">
                <c-badge type="warning">+2</c-badge>
              </c-menu-item>
              <c-submenu icon="icon-list" label="Multi level">
                <c-menu-item index="level.1" label="Level one"></c-menu-item>
                <c-submenu label="Level one">
                  <c-menu-item index="level.2" label="Level two"></c-menu-item>
                  <c-submenu label="Level two">
                    <c-menu-item index="level.3-1" label="Level three"></c-menu-item>
                    <c-menu-item index="level.3-2" label="Level three"></c-menu-item>
                  </c-submenu>
                </c-submenu>
              </c-submenu>
              <c-menu-divider></c-menu-divider>
              <c-menu-heading label="TAGS"></c-menu-heading>
              <c-menu-item index="visitors" icon="icon-hat" label="Visitors"></c-menu-item>
              <c-menu-item index="advertisment" icon="icon-pie-chart2" label="Advertisment"></c-menu-item>
            </c-menu>
          </div>
        </c-col>
        <c-col>
          <form class="form-inline u-mb-15">
            <c-form-field label="Theme:">
              <c-form-select
                v-model="theme"
                :options="themeOptions"
              ></c-form-select>
            </c-form-field>
          </form>

          <p><code>c-menu</code> component provide navigation menu for web pages. Usually used as site navigation at the sider of page.</p>

          <p>Choose a theme by setting <code>theme</code> prop to <code>dark</code>, <code>light</code> or leave it blank.</p>

          <% markdown %>
          ```html
          <template>
            <c-menu :activeIndex="path" @select="onSelect" theme="dark">
              <c-menu-heading label="General" />
              <c-menu-item index="dashboard" icon="icon-grid" label="Dashboard" />
              <c-submenu icon="icon-quill2" label="Articles">
                <c-menu-item index="articles-all" label="All">
                  <c-badge type="info">32</c-badge>
                </c-menu-item>
                ...
              </c-submenu>
              <c-menu-item index="pages" icon="icon-file-empty" label="Pages" />
              <c-menu-item index="comments" icon="icon-bubbles" label="Comments">
                <c-badge type="danger">78</c-badge>
              </c-menu-item>
              <c-menu-divider />
              ...
              <c-submenu icon="icon-list" label="Multi level">
                <c-menu-item index="level.1" label="Level one" />
                <c-submenu label="Level one">
                  <c-menu-item index="level.2" label="Level two" />
                  <c-submenu label="Level two">
                    <c-menu-item index="level.3-1" label="Level three" />
                    <c-menu-item index="level.3-2" label="Level three" />
                  </c-submenu>
                </c-submenu>
              </c-submenu>
              <c-menu-divider />
              <c-menu-heading label="TAGS" />
              <c-menu-item index="visitors" icon="icon-hat" label="Visitors" />
              <c-menu-item index="advertisment" icon="icon-pie-chart2" label="Advertisment" />
            </c-menu>
          </template>

          <script>
            export default {
              data() {
                return {
                  path: 'dashboard'
                }
              },
              methods: {
                onSelect(index) {
                  this.path = index
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Mini">
      <c-row gutter="20">
        <c-col md="7" lg="5" xl="3">
          <div style="text-align: center;">
            <div style="background-color: #17141D; display: inline-block; padding: 8px;">
              <c-menu theme="dark" mini>
                <c-menu-heading label="General"></c-menu-heading>
                <c-menu-item index="dashboard" icon="icon-grid" label="Dashboard"></c-menu-item>
                <c-submenu icon="icon-quill2" label="Articles">
                  <c-menu-item index="articles-all" label="All">
                    <c-badge type="info">32</c-badge>
                  </c-menu-item>
                  <c-menu-item index="articles.add" label="Add New"></c-menu-item>
                  <c-menu-item index="articles.draft" label="Draft">
                    <c-badge>3</c-badge>
                  </c-menu-item>
                  <c-menu-item index="articles.trash" label="Trash">
                    <c-badge>6</c-badge>
                  </c-menu-item>
                </c-submenu>
                <c-menu-item index="pages" icon="icon-file-empty" label="Pages"></c-menu-item>
                <c-menu-item index="comments" icon="icon-bubbles" label="Comments">
                  <c-badge type="danger">78</c-badge>
                </c-menu-item>
                <c-menu-divider></c-menu-divider>
                <c-menu-item index="media" icon="icon-images3" label="Media Library"></c-menu-item>
                <c-menu-divider></c-menu-divider>
                <c-menu-item index="messages" icon="icon-envelop2" label="Messages">
                  <c-badge type="danger">12</c-badge>
                </c-menu-item>
                <c-menu-item index="users" icon="icon-users" label="Users">
                  <c-badge type="info">+37</c-badge>
                </c-menu-item>
                <c-menu-item index="tasks" icon="icon-file-check" label="Tasks">
                  <c-badge type="warning">+2</c-badge>
                </c-menu-item>
                <c-submenu icon="icon-list" label="Multi level">
                  <c-menu-item index="level.1" label="Level one"></c-menu-item>
                  <c-submenu label="Level one">
                    <c-menu-item index="level.2" label="Level two"></c-menu-item>
                    <c-submenu label="Level two">
                      <c-menu-item index="level.3-1" label="Level three"></c-menu-item>
                      <c-menu-item index="level.3-2" label="Level three"></c-menu-item>
                    </c-submenu>
                  </c-submenu>
                </c-submenu>
                <c-menu-divider></c-menu-divider>
                <c-menu-heading label="TAGS"></c-menu-heading>
                <c-menu-item index="visitors" icon="icon-hat" label="Visitors"></c-menu-item>
                <c-menu-item index="advertisment" icon="icon-pie-chart2" label="Advertisment"></c-menu-item>
              </c-menu>
            </div>
          </div>
        </c-col>
        <c-col>

          <p>By adding <code>mini</code> prop to <code>c-menu</code> component to create a icon-bar navigation.</p>
          <% markdown %>
          ```html
          <template>
            <div style="background-color: #17141D; display: inline-block; padding: 8px;">
              <c-menu mini>
                <c-menu-heading label="General" />
                <c-menu-item index="dashboard" icon="icon-grid" label="Dashboard" />
                <c-submenu icon="icon-quill2" label="Articles">
                  <c-menu-item index="articles-all" label="All">
                    <c-badge type="info">32</c-badge>
                  </c-menu-item>
                  ...
                </c-submenu>
                ...
              </c-menu>
            </div>
          </template>

          <script>
            export default {
              data() {
                return {
                  path: 'dashboard'
                }
              },
              methods: {
                onSelect(index) {
                  this.path = index
                }
              }
            }
          </script>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="API">
      <h3><code class="u-fs-18">c-menu</code></h3>
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
            <th>theme</th>
            <td>Can be set to <code>light</code> or <code>dark</code>, it only change text color, you still need to set the container background color by yourself.</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>mini</th>
            <td>Whether switch menu to icon-bar style.</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <table class="table table--bordered table--stress">
        <caption>Events</caption>
        <thead>
          <tr>
            <th>Event name</th>
            <th>Description</th>
            <th>params</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>select</th>
            <td>Emit when select a <code>c-menu-item</code></td>
            <td>index</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3><code class="u-fs-18">c-menu-heading</code></h3>
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
            <th>label</th>
            <td>The heading label text.</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
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
            <td>Located at the right of heading</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3><code class="u-fs-18">c-menu-divider</code></h3>
      <p>There is nothing need to set.</p>
      <hr />
      <h3><code class="u-fs-18">c-menu-item</code></h3>
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
            <th>icon</th>
            <td>The icon class name.</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>label</th>
            <td>The item label text.</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>index</th>
            <td>Unique identifier.</td>
            <td>string | number</td>
            <td>-</td>
          </tr>
          <tr>
            <th>active</th>
            <td>Whether set menu item into active mode manually.</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
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
            <td>Located at the right of menu item</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3><code class="u-fs-18">c-submenu</code></h3>
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
            <th>icon</th>
            <td>The icon class name.</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>label</th>
            <td>The submenu item label text.</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>index</th>
            <td>Unique identifier.</td>
            <td>string | number</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
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
            <td>Default children content.</td>
          </tr>
          <tr>
            <th>after</th>
            <td>Located at the right of submenu item.</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
