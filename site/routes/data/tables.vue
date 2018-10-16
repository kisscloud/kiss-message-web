<script>
import data from './data.json';
export default {
  name: 'TablesView',
  data() {
    return {
      products: data.products,
      users: data.users
    };
  },
  methods: {
    slice(prop, start, end) {
      return this[prop].slice(start, end);
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col md="12">
        <c-panel title="Basic">
          <table class="table table--responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in slice('products', 0, 7)" :key="product._id">
                <td data-label="ID" v-text="product._id"></td>
                <td data-label="Name" v-text="product.name"></td>
                <td data-label="Price"><code v-text="product.price"></code></td>
                <td data-label="Status">
                  <c-badge type="info" v-if="product.status === 'publish'">Publish</c-badge>
                  <c-badge type="warning" v-else-if="product.status === 'draft'">Draft</c-badge>
                  <c-badge v-else>Outdated</c-badge>
                </td>
                <td data-label="Date" v-text="product.created_at"></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <p>Use <code>.table</code> base class to style table.</p>
          <% markdown %>
          ```html
          <table class="table">
            <thead>...</thead>
            <tbody>...</tbody>
          </table>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col>
        <c-panel title="Striped">
          <table class="table table--striped table--responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in slice('users', 0, 7)" :key="user._id">
                <td data-label="ID" v-text="user._id"></td>
                <td data-label="Name" v-text="user.name"></td>
                <td data-label="Age" v-text="user.age"></td>
                <td data-label="Gender" v-text="user.gender"></td>
                <td data-label="Company" v-text="user.company"></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <p>By adding <code>.table--striped</code> modifier class to create striped table.</p>
          <% markdown %>
          ```html
          <table class="table table--striped">
            <thead>...</thead>
            <tbody>...</tbody>
          </table>
          ```
          <% endmarkdown %>
      </c-panel>
      </c-col>
    </c-row>

    <c-row>
      <c-col md="12">
        <c-panel title="Bordered">
          <table class="table table--bordered table--responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in slice('users', 7, 14)" :key="user._id">
                <td data-label="ID" v-text="user._id"></td>
                <td data-label="Name" v-text="user.name"></td>
                <td data-label="Age" v-text="user.age"></td>
                <td data-label="Gender" v-text="user.gender"></td>
                <td data-label="Company" v-text="user.company"></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <p>By adding <code>.table--bordered</code> modifier class to create table with borders.</p>
          <% markdown %>
          ```html
          <table class="table table--bordered">
            <thead>...</thead>
            <tbody>...</tbody>
          </table>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>

      <c-col md="12">
        <c-panel title="Hover">
          <table class="table table--hover table--responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in slice('users', 14, 21)" :key="user._id">
                <td data-label="ID" v-text="user._id"></td>
                <td data-label="Name" v-text="user.name"></td>
                <td data-label="Age" v-text="user.age"></td>
                <td data-label="Gender" v-text="user.gender"></td>
                <td data-label="Company" v-text="user.company"></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <p>By adding <code>.table--hover</code> modifier class to create table with hover feedback.</p>
          <% markdown %>
          ```html
          <table class="table table--hover">
            <thead>...</thead>
            <tbody>...</tbody>
          </table>
          ```
          <% endmarkdown %>
        </c-panel>
      </c-col>
    </c-row>

    <c-panel title="Responsive Table">
      <p>You can resize your window to see the responsive effect of this table. Build with pure html and css, without any javascript.</p>

      <table class="table table--responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in slice('products', 0, 20)" :key="product._id">
            <td data-label="Id" v-text="product._id"></td>
            <td data-label="Name" v-text="product.name"></td>
            <td data-label="Price"><code v-text="product.price"></code></td>
            <td data-label="Status">
              <c-badge type="info" v-if="product.status === 'publish'">Publish</c-badge>
              <c-badge type="warning" v-else-if="product.status === 'draft'">Draft</c-badge>
              <c-badge v-else>Outdated</c-badge>
            </td>
            <td data-label="Date" v-text="product.created_at"></td>
          </tr>
        </tbody>
      </table>

      <hr />

      <p>By adding <code>.table-responsive</code> modifier class to create responsive table, and you need to add <code>data-label</code> attribute on each of <code>tr</code> element.</p>
      <% markdown %>
      ```html
      <table class="table table--responsive">
        <thead>...</thead>
        <tbody>
          <tr data-label="Title">...</tr>
          ...
        </tbody>
      <table>
      ```
      <% endmarkdown %>
    </c-panel>

    <c-panel>
      <header class="toolbar u-pl-0 u-pr-0">
        <div class="toolbar__group l-level">
          <div class="l-level__left">
            <div class="cell">
              <div class="cell__media">
                <i class="icon-stats-bars3"></i>
              </div>
              <div class="cell__content">
                <h1 class="toolbar__title">Bordered Table</h1>
                <ol class="breadcrumb">
                  <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Dashboard</a>
                  </li>
                  <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Tables</a>
                  </li>
                  <li class="breadcrumb__item">
                    data
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="l-level__right">
            <c-button type="success" smart icon-start="icon-plus-circle">New Item</c-button>
          </div>
        </div>
        <div class="toolbar__group l-level">
          <div class="l-level__left">
            <c-nav type="pills">
              <c-nav-item title="All (32)" active></c-nav-item>
              <c-nav-item title="Publish (16)"></c-nav-item>
              <c-nav-item title="Pending (12)"></c-nav-item>
              <c-nav-item title="Draft (4)"></c-nav-item>
            </c-nav>
          </div>
          <div class="l-level__right">
            <c-form-input icon-end="icon-search" placeholder="Search..."></c-form-input>
          </div>
        </div>
      </header>
      <table class="table table--bordered table--hover table--responsive">
        <thead>
          <tr>
            <th class="u-hidden-down@md">
              <c-form-checkbox class="u-m-0"></c-form-checkbox>
            </th>
            <th>#ID</th>
            <th>
              <a role="button">
                Product Name<i class="i-sort is-down"></i>
              </a>
            </th>
            <th>Category</th>
            <th>
              <a role="button">
                Price<i class="i-sort"></i>
              </a>
            </th>
            <th>
              <a role="button">
                Stock<i class="i-sort"></i>
              </a>
            </th>
            <th class="u-text-center">Status</th>
            <th>Vendor</th>
            <th class="u-text-right">
              <a role="button">
                Date<i class="i-sort"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th class="u-hidden-down@md">
              <c-form-checkbox class="u-m-0"></c-form-checkbox>
            </th>
            <th>#ID</th>
            <th>
              <a role="button">
                Product Name<i class="i-sort is-down"></i>
              </a>
            </th>
            <th>Category</th>
            <th>
              <a role="button">
                Price<i class="i-sort"></i>
              </a>
            </th>
            <th>
              <a role="button">
                Stock<i class="i-sort"></i>
              </a>
            </th>
            <th class="u-text-center">Status</th>
            <th>Vendor</th>
            <th class="u-text-right">
              <a role="button">
                Date<i class="i-sort"></i>
              </a>
            </th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td scope="row" class="u-hidden-down@md">
              <c-form-checkbox class="u-m-0"></c-form-checkbox>
            </td>
            <td data-label="ID">{{product._id}}</td>
            <td data-label="Product">
              <a role="button">{{product.name}}</a>
              <div class="u-fs-12 u-text-muted">
                <i class="fa fa-link"></i> http://www.20theme.com/products/{{product._id}}
              </div>
            </td>
            <td data-label="Category">{{product.category}}</td>
            <td data-label="Price"><code>{{product.price}}</code></td>
            <td data-label="Stock">{{product.stock}}</td>
            <td data-label="Status" class="u-text-center">
              <c-badge type="info" v-if="product.status === 'publish'">Publish</c-badge>
              <c-badge type="warning" v-else-if="product.status === 'draft'">Draft</c-badge>
              <c-badge v-else>Outdated</c-badge>
            </td>
            <td data-label="Vendor">{{product.vendor}}</td>
            <td data-label="Date" class="u-text-right">
              <time class="u-fs-12 u-text-muted">{{product.created_at}}</time>
            </td>
          </tr>
        </tbody>
      </table>
      <footer class="l-level u-mt-30">
        <div class="l-level__left">
          <c-form-group>
            <c-form-select
              value=""
              :options="[
                { value: '', label: '--  Bulk Action --' },
                { value: 'publish', label: 'Publish' },
                { value: 'delete', label: 'Delete' }
              ]"
            ></c-form-select>
            <c-button type="primary">Apply</c-button>
          </c-form-group>
        </div>
        <div class="l-level__right">
          <c-pagination type="bordered" :pager="true" :jumper="true" :total="50"></c-pagination>
        </div>
      </footer>
    </c-panel>
  </c-main>
</template>
