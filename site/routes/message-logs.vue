<template>
  <c-main id="page-logs">
   <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <!-- <div class="cell__media">
              <i class="icon-footprint"></i>
            </div> -->
            <div class="cell__content">
              <h1 class="toolbar__title">发送日志 <span>消息的发送日志列表</span></h1>
            </div>
          </div>
        </template>
        <template slot="right">
          <!-- <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item> -->
        </template>
      </c-level>
    </header>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>日志列表</span>
          </div>
          <div v-show="size>10">
          <br>
          <el-pagination
            background
            layout="prev, pager, next,sizes"
            @size-change="handleSizeChange"
            @current-change="getResult"
            :page-sizes="[10, 50, 100]"      
            :page-size="size"
            :total="count">
          </el-pagination>
          <br>
          </div>
          <el-table
            :data="logs"
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
            <!-- <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">恢复</el-button>
              </template>
            </el-table-column> -->
          </el-table>
          <br>
          <el-pagination
            background
            layout="prev, pager, next,sizes"
            @size-change="handleSizeChange"
            @current-change="getResult"
            :page-sizes="[10, 50, 100]"      
            :page-size="size"
            :total="count">
          </el-pagination>
          <br>
        </el-card>
  </c-main>
</template>

<script>
import Vue from 'vue';
import * as api from './../../src/api';
import * as codes from './../../src/codes';

export default {
  data() {
    return {
      logs: [],
      size: 10,
      count: 0
    };
  },
  mounted() {
    this.getResult(1);
  },
  methods: {
    async getResult(page) {
      let res = await api.GetOperationLogs({
        page: page,
        size: this.size
      });
      if (res.code === codes.Success) {
        this.logs = res.data.logs;
        this.count = res.data.count;
      }
    },
    handleSizeChange(size) {
      this.size = size;
      this.getResult(1);
    }
  }
};
</script>

<style lang="scss">
#page-logs {
  .el-card__body {
    padding: 0;
  }
  .el-table {
    border-style: none;
    border-radius: 0;
  }
  .el-table td,
  .el-table th {
    padding: 5px;
  }
  .el-table__body tr.hover-row.el-table__row--striped > td,
  .el-table__body tr.hover-row > td {
    background-color: transparent !important;
  }
  pre {
    margin-bottom: 0;
    padding: 15px;
    border-radius: 5px;
  }
}
</style>

