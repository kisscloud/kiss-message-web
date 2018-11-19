<template>
  <c-main id="page-logs">
   <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__content">
              <h1 class="toolbar__title">短信模板</h1>
            </div>
          </div>
        </template>
        <template slot="right">
            <el-button @click="openNewTemplateDialog()" type="primary" size="small" style="float:right;">
                添加模板
            </el-button>
        </template>
      </c-level>
    </header>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>全部模板</span>
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
            :data="templates"
            border
            :hover="false"
            style="width: 100%">
            <el-table-column
              prop="clientName"
              label="客户端"
            >
            </el-table-column>
            <el-table-column
              prop="templateOpenId"
              label="模板标识符"
            >
            </el-table-column>
            <el-table-column
              prop="content"
              label="模板内容"
            >
            </el-table-column>
            <el-table-column
              prop="count"
              label="发送量"
            >
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="160">
              <template slot-scope="scope">
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
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
        <el-dialog title="添加短信模板" :visible.sync="showTempalteDialog" width="60%">
          <el-form :model="templateForm">
            <el-form-item label="模板标识符" :label-width="formLabelWidth">
              <el-input v-model="templateForm.openId" placeholder="请输入模板标识符"></el-input>
            </el-form-item>
            <el-form-item label="模板内容" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                :rows="5"
                :placeholder="templateFormContentPlaceholder"
                v-model="templateForm.content">
              </el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="showTempalteDialog = false">取 消</el-button>
            <el-button type="primary" @click="submitChangePasswordDialog()">添加</el-button>
          </div>
        </el-dialog> 
  </c-main>
</template>

<script>
import Vue from 'vue';
import * as api from './../../src/api';
import * as codes from './../../src/codes';

export default {
  data() {
    return {
      templates: [
        {
          clientName: '有币支付商户后台',
          templateOpenId: 'register',
          content: '【有币支付】你的注册验证码是 {!! $code !!}',
          vars: '{!! $code !!}',
          count: 100
        }
      ],
      size: 10,
      count: 0,
      formLabelWidth: '100px',
      showTempalteDialog: false,
      templateForm: {},
      templateFormContentPlaceholder:
        '公共变量使用 {{ $var }}, 私有变量使用 {!! $var !!} ...'
    };
  },
  mounted() {
    this.getResult(1);
  },
  methods: {
    async getResult(page) {
      // let res = await api.GetOperationLogs({
      //   page: page,
      //   size: this.size
      // });
      // if (res.code === codes.Success) {
      //   this.logs = res.data.logs;
      //   this.count = res.data.count;
      // }
    },
    handleSizeChange(size) {
      this.size = size;
      this.getResult(1);
    },
    openNewTemplateDialog() {
      this.showTempalteDialog = true;
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

