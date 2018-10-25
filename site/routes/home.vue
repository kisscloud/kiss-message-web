<template lang="nunjucks">
  <c-main>
    <c-row>

       <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
             <template slot="left">
              <i class="icon-user icon-2x u-color-primary"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">在职成员</div>
                <div class="u-h1">{{ accountsCount }}</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-tree3 icon-2x u-color-success"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">部门数</div>
                <div class="u-h1">{{ accountGroupsCount }}</div>
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
                <div class="u-h1">{{ rolesCount }}</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

      <c-col sm="12" lg="6">
        <c-panel>
          <c-level>
            <template slot="left">
              <i class="icon-key icon-2x u-color-danger"></i>
            </template>
            <template slot="right">
              <div class="u-text-right">
                <div class="u-text-muted">权限数</div>
                <div class="u-h1">{{ permissionsCount }}</div>
              </div>
            </template>
          </c-level>
        </c-panel>
      </c-col>

    </c-row>

    <!-- <c-panel title="访问统计">
      <c-button-group slot="control">
        <c-button type="ghost" active>周</c-button>
        <c-button type="ghost">月</c-button>
        <c-button type="ghost">年</c-button>
      </c-button-group>
      <x-activity-chart />
    </c-panel> -->

    <c-row card>
      <c-col lg="24">
        <c-panel title="最近操作">
          <a role="button" slot="control"><router-link to="/permission/logs">更多</router-link></a>
          <el-table
            :data="recentOptionLogs.logs"
            border
            :hover="false"
            style="width: 100%">
            <el-table-column
              prop="operatorName"
              label="擦作者"
              width="180">
            </el-table-column>
            <el-table-column
              prop="createdAt"
              label="操作时间"
              width="240">
            </el-table-column>
            <el-table-column
              prop="targetType"
              label="操作对象"
              width="180">
            </el-table-column>
            <el-table-column label="操作前的值">
              <template slot-scope="scope">
                 <pre v-if="scope.row.beforeValue"><code>{{ scope.row.beforeValue }}</code></pre>
                 <span v-if="!scope.row.beforeValue">null</span>
              </template>
            </el-table-column>
            <el-table-column label="操作后的值">
              <template slot-scope="scope">          
                 <pre v-if="scope.row.afterValue"><code>{{ scope.row.afterValue }}</code></pre>
                 <span v-if="!scope.row.afterValue">null</span>
              </template>
            </el-table-column>
          </el-table>
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
      accountsCount: 0,
      rolesCount: 0,
      accountGroupsCount: 0,
      permissionsCount: 0,
      recentOptionLogs: {
        logs: [],
        count: 0
      }
    };
  },
  async mounted() {
    let res = await api.GetPageDashboardParams();
    if (res.code === codes.Success) {
      this.accountsCount = res.data.accountsCount;
      this.accountGroupsCount = res.data.accountGroupsCount;
      this.rolesCount = res.data.rolesCount;
      this.permissionsCount = res.data.permissionsCount;
      this.recentOptionLogs = res.data.recentOptionLogs;
    }
  },
  methods: {
    slice(prop, start, end) {
      return this[prop].slice(start, end);
    }
  }
};
</script>
