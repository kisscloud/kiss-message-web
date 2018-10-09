<script>
export default {
  name: 'DropdownView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Dropdown">
      <c-dropdown>
        <c-button type="primary">Click Me</c-button>
        <img slot="content" :src="'static/images/avatar.jpg'" alt="" />
      </c-dropdown>
      <hr />

      <p><strong>Dropdown</strong> is an essential component which create popup content, you can use it to create classical <em>Dropmenu</em>. Or any content that need a popover effect, like <em>Picker</em>, <em>Selector</em>, <em>AutoComplete</em> and so on.</p>
      <% markdown %>
      ```html
      <c-dropdown>
        <c-button type="primary">Click Me</c-button>
        <img slot="content" src="..." alt="" />
      </c-dropdown>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Placements">
      <c-dropdown placement="left-start">
        <c-button type="primary">Dropdown</c-button>
        <img slot="content" :src="'static/images/avatar.jpg'" alt="" />
      </c-dropdown>
      <hr />

      <p>Setting <code>placement</code> prop of <strong>Dropdown</strong> component.</p>

      <p>Support 12 placements: <code>top-start</code>, <code>top</code>, <code>top-end</code>, <code>left-start</code>, <code>left</code>, <code>left-end</code>,
      <code>bottom-start</code>, <code>bottom</code>, <code>bottom-end</code>, <code>right-start</code>, <code>right</code>, <code>right-end</code></p>
      <% markdown %>
      ```html
      <c-dropdown placement="left-start">
        <c-button type="primary">Dropdown</c-button>
        <img slot="content" src="..." alt="" />
      </c-dropdown>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="Scoped Trigger">
      <div class="u-mb-15">
        <c-dropdown>
          <c-button slot="trigger"
            type="primary"
            slot-scope="{ show, hide }"
            @mouseenter="show"
            @mouseout="hide"
          >Hover Me</c-button>
          <img slot="content" :src="'static/images/avatar.jpg'" alt="" />
        </c-dropdown>
      </div>
      <div class="u-mb-15">
        <c-dropdown>
          <span slot="trigger"
            slot-scope="{ show, hide }"
          >
            <input class="form-input"
              @focus="show"
              @blur="hide"
              placeholder="Try to focus on me"
            />
          </span>
          <img slot="content" :src="'static/images/avatar.jpg'" alt="" />
        </c-dropdown>
      </div>
      <hr>

      <p>The default dropdown trigger behavior is <code>click</code>, but you can change it by using <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots" target="_blank">scoped-slots</a>.</p>
      <% markdown %>
      ```html
      <c-dropdown>
        <c-button slot="trigger" slot-scope="{show, hide}" @mouseenter="show" @mouseout="hide" type="primary">Hover Me</c-button>
        <img slot="content" src="..." alt="" />
      </c-dropdown>

      <c-dropdown>
        <span slot="trigger" slot-scope="{ show, hide }">
          <input class="form-input" @focus="show" @blur="hide" placeholder="Try to focus on me" />
        </span>
        <img slot="content" src="..." alt="" />
      </c-dropdown>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered">
        <caption class="u-mb-5"><code>c-dropdown</code> Attributes</caption>
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
            <td>placement</td>
            <td>
              set the default position of dropmenu, can be <code>top-start</code>,
              <code>top</code>, <code>top-end</code>, <code>left-start</code>,
              <code>left</code>, <code>left-end</code>, <code>bottom-start</code>,
              <code>bottom</code>, <code>bottom-end</code>, <code>right-start</code>,
              <code>right</code>, <code>right-end</code>
            </td>
            <td>string</td>
            <td>bottom-start</td>
          </tr>
        </tbody>
      </table>

      <table class="table table--bordered">
        <caption class="u-mb-5">Trigger scoped slot, <code>[slot="trigger" slot-scope="props"]</code></caption>
        <thead>
          <tr>
            <th><code>props</code> object property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>show</td>
            <td>Function</td>
            <td>show dropdown content</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>Function</td>
            <td>hide dropdown content</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

    <hr>

    <c-panel title="Dropmenu">
      <c-dropdown>
        <c-button type="primary">Dropmenu</c-button>
        <c-dropmenu slot="content">
          <c-dropmenu-item icon="icon-user" title="Profile"></c-dropmenu-item>
          <c-dropmenu-item icon="icon-coin-dollar" title="Billing"></c-dropmenu-item>
          <c-dropdown placement="right-start">
            <c-dropmenu-item icon="icon-drawer" has-children title="Mail"></c-dropmenu-item>
            <c-dropmenu slot="content">
              <c-dropmenu-item title="Inbox">
                <c-badge type="info" slot="after">5</c-badge>
              </c-dropmenu-item>
              <c-dropmenu-item title="Draft">
                <c-badge slot="after">1</c-badge>
              </c-dropmenu-item>
              <c-dropmenu-item title="Trash"></c-dropmenu-item>
            </c-dropmenu>
          </c-dropdown>
          <c-dropmenu-item icon="icon-cog" title="Settings"></c-dropmenu-item>
          <c-dropmenu-divider></c-dropmenu-divider>
          <c-dropmenu-item icon="icon-switch" title="Logout"></c-dropmenu-item>
        </c-dropmenu>
      </c-dropdown>
      <hr>

      <p>The general use case of <strong>Dropdown</strong> is <em>Dropmenu</em>.</p>
      <% markdown %>
      ```html
      <c-dropdown>
        <c-button type="primary">Dropmenu</c-button>
        <c-dropmenu slot="content">
          <c-dropmenu-item icon="icon-user" title="Profile" />
          <c-dropmenu-item icon="icon-coin-dollar" title="Billing" />
          <c-dropdown placement="right-start">
            <c-dropmenu-item icon="icon-drawer" has-children title="Mail" />
            <c-dropmenu slot="content">
              <c-dropmenu-item title="Inbox">
                <c-badge type="info" slot="after">5</c-badge>
              </c-dropmenu-item>
              <c-dropmenu-item title="Draft">
                <c-badge slot="after">1</c-badge>
              </c-dropmenu-item>
              <c-dropmenu-item title="Trash" />
            </c-dropmenu>
          </c-dropdown>
          <c-dropmenu-item icon="icon-cog" title="Settings" />
          <c-dropmenu-divider />
          <c-dropmenu-item icon="icon-switch" title="Logout" />
        </c-dropmenu>
      </c-dropdown>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel title="API">
      <table class="table table--bordered">
        <caption class="u-mb-5"><code>c-dropmenu-item</code> Attributes</caption>
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
            <td>title</td>
            <td>title of dromenu item</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>icon class of dropmenu item</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>after</td>
            <td>text at the end of dropmenu item</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <c-note type="warning">
        Supporting all anchor element attributes!
      </c-note>

      <table class="table table--bordered">
        <caption class="u-mb-5"><code>c-dropmenu-item</code> Slots</caption>
        <thead>
          <tr>
            <th>name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>icon</td>
            <td>content at the start of dropmenu item</td>
          </tr>
          <tr>
            <td>after</td>
            <td>content at the end of dropmenu item</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

  </c-main>
</template>
