<template>
  <c-main id="page-mail-templates">
    <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__content">
              <h1 class="toolbar__title">邮件模板</h1>
            </div>
          </div>
        </template>
        <template slot="right">
          <el-button
            @click="openNewTemplateDialog()"
            type="primary"
            size="small"
            style="float:right;"
          >添加模板</el-button>
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
          :total="count"
        ></el-pagination>
        <br>
      </div>
      <el-table :data="templates" border :hover="false" style="width: 100%">
        <el-table-column prop="clientName" label="客户端"></el-table-column>
        <el-table-column prop="templateOpenId" label="模板标识符"></el-table-column>
        <el-table-column prop="title" label="主标题"></el-table-column>
        <el-table-column prop="subject" label="子标题"></el-table-column>
        <el-table-column prop="count" label="发送量"></el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
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
        :total="count"
      ></el-pagination>
      <br>
    </el-card>
    <el-dialog title="添加短信模板" :visible.sync="showTempalteDialog" width="60%">
      <el-form :model="templateForm">
        <el-form-item label="模板标识符" :label-width="formLabelWidth">
          <el-input v-model="templateForm.openId" placeholder="请输入模板标识符"></el-input>
        </el-form-item>
        <el-form-item label="模板语言" :label-width="formLabelWidth">
          <el-select v-model="templateForm.lang" placeholder="请选择" style="width:100%;">
            <el-option
              v-for="item in langs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮件标题" :label-width="formLabelWidth">
          <el-input v-model="templateForm.title" placeholder="请输入模板标识符"></el-input>
        </el-form-item>
        <el-form-item label="邮件子标题" :label-width="formLabelWidth">
          <el-input v-model="templateForm.subTitle" placeholder="请输入模板标识符"></el-input>
        </el-form-item>
        <el-form-item label="邮件内容" :label-width="formLabelWidth">
          <codemirror ref="cm" v-model="templateForm.content" :options="codeMirrorOptions"></codemirror>
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
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/theme/base16-light.css';

export default {
  components: {
    codemirror
  },
  data() {
    return {
      codeMirrorOptions: {
        tabSize: 4,
        mode: 'text/x-sh',
        theme: 'base16-light',
        lineNumbers: true,
        line: true
      },
      templates: [
        {
          clientName: '有币支付商户后台',
          templateOpenId: 'register',
          title: '【有币支付】注册验证码',
          subject: '【有币支付】注册验证码',
          vars: '{!! $code !!}',
          count: 11
        }
      ],
      size: 10,
      count: 0,
      formLabelWidth: '100px',
      showTempalteDialog: false,
      templateForm: {},
      templateFormContentPlaceholder:
        '公共变量使用 {{ $var }}, 私有变量使用 {!! $var !!} ...',
      langs: [
        {
          label: 'zh-CN',
          value: 'zh-CN'
        },
        {
          label: 'en',
          value: 'en'
        }
      ]
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
      this.$refs.cm.refresh();
    }
  }
};
</script>

<style lang="scss">
#page-mail-templates {
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
  // code mirror
  .vue-codemirror {
    border: 1px solid #e0e3e9;
  }
  .CodeMirror {
    min-height: 300px;
    padding-bottom: 15px;
    height: auto;
  }
  .CodeMirror-cursor {
    height: 14px !important;
    margin-top: 14px;
  }
  .CodeMirror pre {
    height: 22px;
  }
}
</style>

