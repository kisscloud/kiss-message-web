<template lang="nunjucks">
  <c-main>
    <c-row>
      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-tree3 icon-2x u-color-primary"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">部门数</div>
                <div class="u-h1">{{ accountGroups }}</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-user-tie icon-2x u-color-info"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">角色数</div>
                <div class="u-h1">113</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
             <template slot="left">
              <i class="icon-user icon-2x u-color-success"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">在职成员</div>
                <div class="u-h1">1231</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-users icon-2x u-color-warning"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">全部成员</div>
                <div class="u-h1">1231</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

    </c-row>

    <c-panel title="访问统计">
      <c-button-group slot="control">
        <c-button type="ghost" active>周</c-button>
        <c-button type="ghost">月</c-button>
        <c-button type="ghost">年</c-button>
      </c-button-group>
      <x-activity-chart />
    </c-panel>

    <c-row card>
      <c-col lg="24">
        <c-panel title="最近操作">
          <a role="button" slot="control">更多</a>
          <table class="table table--bordered table--hover table--responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>用户</th>
                <th>IP</th>
                <th>操作对象</th>
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
import * as api from './../../src/api';
import * as codes from './../../src/codes';
import ActivityChart from './data/charts/basic.vue';
import data from './data/data.json';
export default {
  name: 'HomeView',
  components: {
    'x-activity-chart': ActivityChart
  },
  data() {
    return {
      users: data.users,
      orders: data.orders,
      accountGroups: 0
    };
  },
  async mounted() {
    let res = await api.GetPageDashboardParams();
    if (res.code === codes.Success) {
      this.accountGroups = res.data.accountGroups;
    }
  },
  methods: {
    slice(prop, start, end) {
      return this[prop].slice(start, end);
    }
  }
};
</script>
