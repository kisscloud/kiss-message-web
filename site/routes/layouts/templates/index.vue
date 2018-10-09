<script>
export default {
  name: 'TemplatesView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Overview">
      <p>
        <strong>Cover</strong> provide a set of template layout components. Through different combinations,
        you can create common app layouts.
      </p>
    </c-panel>

    <c-panel title="Basic">
      <c-row gutter="20">
        <c-col class="u-text-center" md="10">
          <img class="u-center-block u-mb-15" src="./basic.svg">
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <c-app>

            <c-sider>
              <c-brand class="u-bg-primary" slot="start">
                <img src="..." alt="brand">
              </c-brand>
              // place fixed top content by addding [slot="start"] attribute
              // place navigate menu here
              // place fixed bottom content by adding [slot="end"] attribute
            </c-sider>

            <c-content>

              <c-header>
                // place navbar here
              </c-header>

              <c-body>
                // If you use vue-router, you may want to place <router-view /> in here.
                // And cut the code below into your view component as container or create your own.
                <c-main>
                  // place your main content here
                </c-main>
              </c-body>

              <c-footer>
                // place copyright information here
              </c-footer>

            </c-content>

          </c-app>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Mini Sider">
      <c-row gutter="20">
        <c-col class="u-text-center" md="10">
          <img class="u-center-block u-mb-15" src="./mini.svg">
          <router-link to="/templates/mini" class="btn btn--primary btn--outline btn--smart">DEMO</router-link>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <c-app siderType="mini">

            <c-sider>
              <c-brand class="u-bg-primary" slot="start">
                <img src="..." alt="brand">
              </c-brand>
              // place fixed top content by addding [slot="start"] attribute
              // place navigate menu here
              <c-menu mini>
              ...
              </c-menu>
              // place fixed bottom content by adding [slot="end"] attribute
            </c-sider>

            <c-content>

              <c-header>
                // place navbar here
              </c-header>

              <c-body>
                // If you use vue-router, you may want to place <router-view /> in here.
                // And cut the code below into your view component as container or create your own.
                <c-main>
                  // place your main content here
                </c-main>
              </c-body>

              <c-footer>
                // place copyright information here
              </c-footer>

            </c-content>

          </c-app>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="Center">
      <c-row gutter="20">
        <c-col class="u-text-center" md="10">
          <img class="u-center-block u-mb-15" src="./center.svg">
          <router-link to="/templates/center" class="btn btn--primary btn--outline btn--smart">DEMO</router-link>
        </c-col>
        <c-col>
          <% markdown %>
          ```html
          <c-app>
            <c-sider class="u-hidden-up@md">
              // navigation only shown in mobile
            </c-sider>
            <c-content>
              <c-header>
                <div class="l-container">
                  <nav class="navbar u-pl-0 u-pr-0">
                    // place navbar items here
                  </nav>
                </div>
              </c-header>

              <c-body>
                // place your main content here
                // If you use vue-router, you may want to place <router-view /> in here.
                // And cut the code below into your view component as container or create your own.
              </c-body>

              <c-footer>
                // place copyright information here
              </c-footer>
            </c-content>
          </c-app>
          ```
          <% endmarkdown %>
        </c-col>
      </c-row>
    </c-panel>

    <c-panel title="API">
      <h3><code class="u-fs-18">c-app</code></h3>
      <table class="table table--bordered table--stress">
        <caption class="u-mb-5">Props</caption>
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
            <th>
              siderType
            </th>
            <td>
              type of sider, can be set to <code>mini</code>
            </td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <th>
              siderOpen
            </th>
            <td>
              when viewport size is <code>&le;600</code>, sider will be auto hidden, you can toggle this property value to show/hide sider.
            </td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <table class="table table--bordered">
        <caption>Child components</caption>
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><code>c-sider</code></th>
            <td>left sider area, mainly used as main navigation</td>
          </tr>
          <tr>
            <th><code>c-content</code></th>
            <td>the page content area</td>
          </tr>
          <tr>
            <th><code>c-header</code></th>
            <td>the page header area, mainly used as topbar navigation</td>
          </tr>
          <tr>
            <th><code>c-body</code></th>
            <td>the page body area</td>
          </tr>
          <tr>
            <th><code>c-main</code></th>
            <td>the page main content area, can be scrollable</td>
          </tr>
          <tr>
            <th><code>c-footer</code></th>
            <td>the page footer content area, mainly used as site information</td>
          </tr>
        </tbody>
      </table>
    </c-panel>
  </c-main>
</template>
