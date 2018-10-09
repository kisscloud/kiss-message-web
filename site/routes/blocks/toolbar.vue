<script>
export default {
  name: 'ToolbarView'
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Basic">
      <p>Use <strong>Toolbar</strong> UI Block to create page header navigation.</p>

      <p>Structure:</p>
      <ul>
        <li>
          <code>.toolbar</code>
          <ul>
            <li>
              <code>.toolbar__group</code>
              <ul>
                <li>
                  <code>.toolbar__title</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>The <strong>Toolbar</strong> only has three type elements, by combining it with <strong>Cell</strong>, <strong>Level</strong> and other components, you can create various page navigation.</p>
      <% markdown %>
      ```html
      <header class="toolbar">
        <div class="toolbar__group">
          ...
          <h1 class="toolbar__title">
          ...
        </div>
        <div class="toolbar__group">
          ...
        </div>
      </header>
      ```
      <% endmarkdown %>
    </c-panel>

    <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__media">
              <i class="icon-footprint"></i>
            </div>
            <div class="cell__content">
              <h1 class="toolbar__title">Dashboard</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb__item">
                  <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                  <a href="#" class="breadcrumb__link">Library</a>
                </li>
                <li class="breadcrumb__item">
                  Book
                </li>
              </ol>
            </div>
          </div>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
          <c-level-item>
            <c-button icon-start="icon-plus-circle" type="info" smart>New Promotion</c-button>
          </c-level-item>
        </template>
      </c-level>
    </header>

    <hr />

    <header class="toolbar">
      <c-level>
        <template slot="left">
          <h1 class="toolbar__title">Campaigns
            <span>36 Results</span>
          </h1>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
          <c-level-item>
            <c-button icon-start="icon-plus-circle" type="info" smart>New Promotion</c-button>
          </c-level-item>
        </template>
      </c-level>
    </header>

    <hr />

    <header class="toolbar">
      <c-level>
        <template slot="left">
          <c-level-item>
            <c-button icon-start="icon-plus-circle" type="ghost"></c-button>
          </c-level-item>
          <c-level-item>
            <c-button-group>
              <c-button icon-start="icon-make-group" type="ghost"></c-button>
              <c-button icon-start="icon-ungroup" type="ghost"></c-button>
            </c-button-group>
          </c-level-item>
          <c-level-item>
            <c-button-group>
              <c-button icon-start="icon-zoom-out" type="ghost"></c-button>
              <c-button icon-start="icon-zoom-in" type="ghost"></c-button>
            </c-button-group>
          </c-level-item>
          <c-level-item>
            <c-button-group>
              <c-button icon-start="icon-paragraph-left" type="ghost"></c-button>
              <c-button icon-start="icon-paragraph-center" type="ghost"></c-button>
              <c-button icon-start="icon-paragraph-right" type="ghost"></c-button>
            </c-button-group>
          </c-level-item>
          <c-level-item>
            <c-button-group>
              <c-button icon-start="icon-vector" type="ghost"></c-button>
              <c-button icon-start="icon-vector2" type="ghost"></c-button>
            </c-button-group>
          </c-level-item>
          <c-level-item>
            <c-button-group>
              <c-button icon-start="icon-crop" type="ghost"></c-button>
              <c-button icon-start="icon-scissors" type="ghost"></c-button>
            </c-button-group>
          </c-level-item>
          <c-level-item>
            <c-button icon-start="icon-bin" type="ghost"></c-button>
          </c-level-item>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
          <c-level-item>
            <c-dropdown placement="bottom-end">
              <a role="button" class="account">
                <div class="account__media">
                  <img :src="'static/images/avatar.jpg'" class="avatar avatar--sm">
                </div>
                <div class="account__after">
                  <i class="i-caret"></i>
                </div>
              </a>
              <c-dropmenu slot="content">
                <c-dropmenu-item title="Profile"></c-dropmenu-item>
                <c-dropmenu-item title="Inbox"></c-dropmenu-item>
                <c-dropmenu-divider></c-dropmenu-divider>
                <c-dropmenu-item title="Logout"></c-dropmenu-item>
              </c-dropmenu>
            </c-dropdown>
          </c-level-item>
        </template>
      </c-level>
    </header>

    <hr />

    <header class="toolbar">
      <div class="toolbar__group">
        <c-level>
          <template slot="left">
            <h1 class="toolbar__title">Performance</h1>
          </template>
          <template slot="right">
            <c-button type="success" smart icon-start="icon-download4">Download Report</c-button>
          </template>
        </c-level>
      </div>
      <!-- END .toolbar__group -->
      <div class="toolbar__group">
        <c-level>
          <template slot="left">
            <c-nav type="pills">
              <c-nav-item title="Analytics" active></c-nav-item>
              <c-nav-item title="Previous Exports"></c-nav-item>
              <c-nav-item title="Targeting"></c-nav-item>
              <c-nav-item title="Customers"></c-nav-item>
              <c-nav-item title="Team"></c-nav-item>
            </c-nav>
          </template>
          <template slot="right">
            <c-form layout="inline">
              <c-form-field>
                <c-form-group>
                  <c-form-select
                    value="2016-01-25"
                    :options="[{value: '2016-01-25', label: 'Jul 25, 16'}]"
                  ></c-form-select>
                  <c-form-addon>-</c-form-addon>
                  <c-form-select
                    value="2016-08-22"
                    :options="[{value: '2016-08-22', label: 'Aug 22, 16'}]"
                  ></c-form-select>
                </c-form-group>
              </c-form-field>
            </c-form>
          </template>
        </c-level>
      </div>
      <!-- END .toolbar__group -->
    </header>
    <!-- END .toolbar -->

    <hr />

    <header class="toolbar">
      <c-level>
        <template slot="left">
          <h1 class="toolbar__title">All Projects
            <small>34 Projects</small>
          </h1>
        </template>
        <template slot="center">
          <c-button-group>
            <c-button type="primary" outline smart icon-start="icon-home">ALL PROJECTS</c-button>
            <c-button type="primary" outline smart icon-start="icon-cloud">SHARED</c-button>
            <c-button type="primary" outline smart icon-start="icon-images3">MEDIA FILES</c-button>
          </c-button-group>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
          <c-level-item>
            <c-button icon-start="icon-plus-circle" type="success"></c-button>
          </c-level-item>
        </template>
      </c-level>
    </header>
    <!-- END .toolbar -->

    <hr />

    <header class="toolbar toolbar--ghost">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__media">
              <i class="icon-stats-bars3"></i>
            </div>
            <div class="cell__content">
              <h1 class="toolbar__title">Dashboard</h1>
              <ol class="breadcrumb">
                <li class="breadcrumb__item">
                  <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                  <a href="#" class="breadcrumb__link">Library</a>
                </li>
                <li class="breadcrumb__item">
                  Book
                </li>
              </ol>
            </div>
          </div>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
          <c-level-item>
            <c-button icon-start="icon-plus-circle" type="info">New Post</c-button>
          </c-level-item>
        </template>
      </c-level>
    </header>
    <!-- END .toolbar -->
  </c-main>
</template>
