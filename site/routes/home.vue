<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-stats-growth2 icon-2x u-color-success"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">Monthly Sales</div>
                <div class="u-h1">371</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-users icon-2x u-color-info"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">New Users</div>
                <div class="u-h1">113</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <c-level-item>
              <div class="u-text-center">
                <div class="u-text-muted">Followers</div>
                <div class="u-h1">8346</div>
              </div>
            </c-level-item>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-download4 icon-2x u-color-primary"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">Downloads</div>
                <div class="u-h1">1231</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

    </c-row>

    <c-panel title="Activities">
      <c-button-group slot="control">
        <c-button type="ghost" active>Week</c-button>
        <c-button type="ghost">Month</c-button>
        <c-button type="ghost">Year</c-button>
      </c-button-group>
      <x-activity-chart />
    </c-panel>

    <c-row card>

      <c-col lg="8">
        <c-panel title="Visitor Source">
          <div class="u-mb-15">
            <c-level>
              <span slot="left">USA</span>
              <span slot="right" class="u-color-muted">65</span>
            </c-level>
            <c-progress-bar type="#397AF2" value="65"></c-progress-bar>
          </div>
          <div class="u-mb-15">
            <c-level>
              <span slot="left">China</span>
              <span slot="right" class="u-color-muted">80</span>
            </c-level>
            <c-progress-bar type="#395CA9" value="80"></c-progress-bar>
          </div>
          <div class="u-mb-15">
            <c-level>
              <span slot="left">Australia</span>
              <span slot="right" class="u-color-muted">50</span>
            </c-level>
            <c-progress-bar type="#3B94D9" value="50"></c-progress-bar>
          </div>
          <div>
            <c-level>
              <span slot="left">Brazil</span>
              <span slot="right" class="u-color-muted">35</span>
            </c-level>
            <c-progress-bar type="#003569" value="35"></c-progress-bar>
          </div>
        </c-panel>
      </c-col>

      <c-col lg="8">
        <c-panel title="This Week's Goals">
          <c-level class="u-mb-30">
            <div slot="left">
              <h5>Have 100,00 users</h5>
              <div class="u-text-muted">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <c-progress-circle value="65" type="success" slot="right">65%</c-progress-circle>
          </c-level>
          <c-level>
            <div slot="left">
              <h5>Total sales revenue: $7,980</h5>
              <div class="u-text-muted">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <c-progress-circle value="36" type="warning" slot="right">36%</c-progress-circle>
          </c-level>
        </c-panel>
      </c-col>

      <c-col lg="8">
        <c-panel title="Server Stats">
          <ul class="list">
            <li class="list__item">
              <c-level>
                <span class="u-inline-flex" slot="left"><i class="icon-drive u-color-green u-mr-5"></i>Status</span>
                <span slot="right" class="u-color-green">Running</span>
              </c-level>
            </li>
            <li class="list__item">
              <c-level>
                <span class="u-inline-flex" slot="left"><i class="icon-chip u-color-blue u-mr-5"></i>CPU USAGE (2.7 GHZ)</span>
                <span slot="right" class="u-color-green">15.76%</span>
              </c-level>
            </li>
            <li class="list__item">
              <c-level>
                <span class="u-inline-flex" slot="left"><i class="icon-database u-color-orange u-mr-5"></i>MEMORY USAGE (128 GB)</span>
                <span slot="right" class="u-color-warning">75.43%</span>
              </c-level>
            </li>
            <li class="list__item">
              <c-level>
                <span class="u-inline-flex" slot="left"><i class="icon-floppy-disk u-color-primary u-mr-5"></i>DISK USAGE (1TB)</span>
                <span slot="right" class="u-color-green">25.54%</span>
              </c-level>
            </li>
          </ul>
        </c-panel>
      </c-col>

    </c-row>

    <c-row card>
      <c-col lg="8">
        <c-panel title="Top Sales">
          <ul class="list">
            <li class="list__item" v-for="product in slice('products', 0, 4)" :key="product._id">
              <article class="cell">
                <figure class="cell__media">
                  <img class="u-rounded" :src="'https://placeimg.com/100/100/any?' + product._id" width="50" height="50">
                </figure>
                <div class="cell__content">
                  <h6 class="u-m-0">{{product.name}}</h6>
                  <div class="u-text-muted u-fs-12">Status: {{product.status}}</div>
                  <div class="u-text-muted u-fs-12">Vendor: {{product.vendor}}</div>
                </div>
                <div class="cell__after u-w-60 u-text-right">
                  <small>{{product.price}}</small>
                  <c-progress-bar size="sm" type="success" :value="product.stock"></c-progress-bar>
                </div>
              </article>
            </li>
          </ul>
        </c-panel>
      </c-col>

      <c-col lg="16">
        <c-panel title="Recent Orders">
          <a role="button" slot="control">More</a>
          <table class="table table--bordered table--hover table--responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Fee</th>
                <th>Status</th>
                <th class="u-text-right@md">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in slice('orders', 0, 6)" :key="order._id">
                <th data-label="Id">
                  <a role="button" v-text="index"></a>
                </th>
                <td data-label="User">{{users[order.user_id].name}}</td>
                <td data-label="Fee"><code>{{order.fee}}</code></td>
                <td data-label="Status">
                  <c-badge type="success" v-if="order.payment == 'paid'">Paid</c-badge>
                  <c-badge type="warning" v-else-if="order.status == 'unpaid'">Unpaid</c-badge>
                  <c-badge v-else>Refunded</c-badge>
                </td>
                <td data-label="Date" class="u-text-right@md">{{order.created_at}}</td>
              </tr>
            </tbody>
          </table>
        </c-panel>
      </c-col>
    </c-row>
  </c-main>
</template>

<script>
import ActivityChart from './data/charts/basic.vue';
import data from './data/data.json';
export default {
  name: 'HomeView',
  components: {
    'x-activity-chart': ActivityChart
  },
  data() {
    return {
      messages: data.messages,
      users: data.users,
      orders: data.orders,
      products: data.products
    };
  },
  methods: {
    slice(prop, start, end) {
      return this[prop].slice(start, end);
    }
  }
};
</script>
