<template>
  <c-main id="page-currencies">
    <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__content">
              <h1 class="toolbar__title">币种管理</h1>
            </div>
          </div>
        </template>
        <template slot="right">
          <el-button @click="openNewCurrencyDialog()" type="primary" size="small">添加币种</el-button>
        </template>
      </c-level>
    </header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>币种列表</span>
      </div>
      <el-table
        v-loading="pageLoading"
        :data="currencies"
        border
        :hover="false"
        style="width: 100%"
      >
        <el-table-column prop="name" label="全称"></el-table-column>
        <el-table-column prop="symbol" label="符号"></el-table-column>
        <el-table-column prop="blockChain" label="主链"></el-table-column>
        <el-table-column prop="depositConfirmations" label="充值确认数"></el-table-column>
        <el-table-column prop="withdrawConfirmations" label="提币确认数"></el-table-column>
        <el-table-column prop="serviceFeeRate" label="服务费率"></el-table-column>
        <el-table-column prop="withdrawFee" label="提币手续费"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :title="currencyForm.id? '编辑币种': '添加币种'"
      :show-close="!loading" :close-on-click-modal="!loading" :close-on-press-escape="!loading"
     :visible.sync="showCurrencyDialog">
      <el-form
        :model="currencyForm"
        :rules="currencyFormRules"
        v-loading="loading"
        ref="currencyForm"
        :validate-on-rule-change="false"
      >
        <el-form-item label="币种全称" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="币种符号" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.symbol" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="币种主链" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.blockChain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="币种图标" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.icon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="充值确认数" :label-width="labelWidth" prop="clientName">
          <el-input type="number" v-model="currencyForm.depositConfirmations" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="提现确认数" :label-width="labelWidth" prop="clientName">
          <el-input type="number" v-model="currencyForm.withdrawConfirmations" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务费率" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.serviceFeeRate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="提币手续费" :label-width="labelWidth" prop="clientName">
          <el-input v-model="currencyForm.withdrawFee" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="币种描述" :label-width="labelWidth" prop="clientName">
          <el-input
            type="textarea"
            placeholder
            v-model="currencyForm.description"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showCurrencyDialog = false">取 消</el-button>
        <el-button type="primary" @click="submitCurrencyForm()">{{ currencyForm.id? '保存': '添加' }}</el-button>
      </div>
    </el-dialog>
  </c-main>
</template>

<script>
import Vue from 'vue';
import merge from 'merge';
import * as api from './../../src/api';
import * as codes from './../../src/codes';

let currencyForm = {
  blockChain: '',
  depositConfirmations: 0,
  depositSwitch: true,
  description: '',
  icon: '',
  name: '',
  serviceFeeRate: '',
  symbol: '',
  visibleSwitch: true,
  withdrawConfirmations: 0,
  withdrawFee: '',
  withdrawSwitch: true
};

export default {
  data() {
    return {
      labelWidth: '120px',
      pageLoading: false,
      loading: false,
      showCurrencyDialog: false,
      currencies: [],
      currencyForm: merge({}, currencyForm),
      currencyFormRules: {}
    };
  },
  async mounted() {
    this.pageLoading = true;
    let res = await api.GetCurrencies();
    if (res.code === codes.Success) {
      this.currencies = res.data;
    }
    this.pageLoading = false;
  },
  methods: {
    openNewCurrencyDialog() {
      this.showCurrencyDialog = true;
    },
    submitCurrencyForm() {
      this.$refs['currencyForm'].validate(async valid => {
        if (valid) {
          this.loading = true;
          let res = await api.PostCurrency(this.currencyForm);
          if (res.code === codes.Success) {
            this.showCurrencyDialog = false;
            this.currencies.push(res.data);
            this.$message({
              message: '币种添加成功',
              type: 'success'
            });
          } else if (res.code === codes.ValidateError) {
            // this.clientForm.status = `${this.clientForm.status}`;
            // let rules = merge.recursive(true, {}, this.clientFormRules);
            // for (let i in res.data) {
            //   if (typeof this.clientFormRules[i] === 'undefined') {
            //     this.clientFormRules[i] = [];
            //   }
            //   this.clientFormRules[i].push({
            //     validator: (rule, value, callback) => {
            //       callback(new Error(res.data[i][0]));
            //     },
            //     trigger: 'blur'
            //   });
            //   this.$refs.clientForm.validateField(i);
            // }
            // this.clientFormRules = merge.recursive(true, {}, rules);
          } else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        } else {
          return false;
        }
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss">
#page-currencies {
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

