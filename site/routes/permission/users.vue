<template>
  <c-main id="page-accounts">
    <header class="toolbar">
      <c-level>
        <template slot="left">
                  <div class="cell">
                    <!-- <div class="cell__media">
                      <i class="icon-footprint"></i>
                    </div> -->
                    <div class="cell__content">
                      <h1 class="toolbar__title">用户管理 <span>管理平台的部门和用户</span></h1>
                    </div>
                  </div>
</template>

<template slot="right">
  <!-- <c-level-item>
    <el-input style="width=300px;" size="small" placeholder="输入用户ID/姓名/邮箱/手机号">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </c-level-item> -->
  <el-dropdown @command="handleCommand">
    <el-button type="primary" size="small">
      添加
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="account">添加用户</el-dropdown-item>
      <el-dropdown-item command="group">添加部门</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <!-- <c-level-item><c-button icon-start="icon-plus-circle" type="info" smart>添加</c-button></c-level-item> -->
</template>
      </c-level>
    </header>
    
    
    <el-container>

      <!-- 部门控件 -->
      <el-aside style="">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>部门列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加部门</el-button> -->
          </div>
          <el-tree
          :data="groupTree"
          node-key="id"
          ref="groupTree"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          @node-click="clickModule"
          :expand-on-click-node="false"
          :highlight-current="true"
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">
          <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <el-button
                      v-if="data.id !== 0"
                      type="text"
                      class="icon-pen5"
                      @click="openEditGroup(data)"
                      size="mini">
                    </el-button>
                  </span>
           </span>
          </el-tree>
          </el-card>
      </el-aside>
      <!-- 用户列表 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>用户列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加用户</el-button> -->
          </div>

          <el-table
            :data="showAccounts"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="groupName"
              label="部门"
              width="180">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱">
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="电话">
            </el-table-column>
            <el-table-column
              prop="statusText"
              label="状态">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              width="180">
              <span slot-scope="scope" style="text-align: center;display: block;width: 100%;">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                <el-button type="text" size="mini" @click="openEditAccount(scope.row)">编辑</el-button>
                <el-button v-show="scope.row.status === 1" type="text" size="mini" @click="clickDimission(scope.row)">离职</el-button>
                <el-button v-show="scope.row.status === 2" type="text" size="mini" @click="clickResume(scope.row)">复职</el-button>
                <el-button type="text" size="mini" @click="clickResetPassword(scope.row)">重置密码</el-button>
              </span>
            </el-table-column>
          </el-table>
          <!-- <br>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="accountsCount">
          </el-pagination> -->
        </el-card>
      </el-main>
    </el-container>
    
    <el-dialog :title="userForm.id ? '编辑用户':'添加用户'" :visible.sync="showUserFormModal">
      <el-form :model="userForm" :rules="userFormRules" ref="userForm" :validate-on-rule-change="false">
        <el-form-item label="部门" :label-width="formLabelWidth" prop="groupId">
          <el-select filterable v-model="userForm.groupId" placeholder="请选择用户所属部门" style="width:100%;">
            <el-option v-for="item in userFormGroups" v-bind:key="'userGroup'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="userForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="userForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="userForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth" prop="mobile">
          <el-input v-model="userForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-show="!userForm.id" label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-show="!userForm.id" label="重复密码" :label-width="formLabelWidth" prop="repeatPassword">
          <el-input type="password" v-model="userForm.repeatPassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showUserFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitUserForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="groupForm.id ? '编辑部门':'添加部门'" :visible.sync="showGroupFormModal">
      <el-form :model="groupForm" :rules="groupFormRules" ref="groupForm" :validate-on-rule-change="false">
        <el-form-item label="父部门" :label-width="formLabelWidth">
          <el-select v-model="groupForm.parentId" filterable placeholder="请选择父部门" style="width:100%;">
            <el-option v-for="item in groupFormGroups" v-bind:key="'groupFromGroups'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="groupForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-show="groupForm.id" @click="deleteGroup(groupForm)" style="float:left;">删除部门</el-button>
        <el-button @click="showGroupFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitGroupForm()">确 定</el-button>
      </div>
    </el-dialog>
  </c-main>
</template>

<script>
import * as api from '../../../src/api';
import * as codes from '../../../src/codes';
import merge from 'merge';

var userForm = {
  id: null,
  groupId: null,
  name: null,
  username: null,
  email: null,
  mobile: null,
  password: null
};

var groupForm = {
  id: null,
  parentId: 0,
  name: null
};

var createUserRules = {
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    },
    {
      min: 8,
      max: 20,
      message: '请输入8到20位密码',
      trigger: 'blur'
    }
  ],
  repeatPassword: [
    {
      required: true,
      message: '请输入重复密码',
      trigger: 'change'
    }
  ]
};

var updateUserRules = {
  groupId: [
    {
      required: true,
      message: '请选择部门',
      trigger: 'change'
    }
  ],
  name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'change'
    }
  ],
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'change'
    }
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'change'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱',
      trigger: 'change'
    }
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'change'
    }
  ]
};

var groupFormRules = {
  name: [
    {
      required: true,
      message: '请输入部门名称',
      trigger: 'change'
    }
  ]
};

export default {
  name: 'Persmissionaccounts',
  data() {
    return {
      showUserFormModal: false,
      showGroupFormModal: false,
      formLabelWidth: '80px',
      userForm: merge({}, userForm),
      groupForm: merge({}, groupForm),
      userFormRules: {},
      groupFormRules: merge.recursive(true, {}, groupFormRules),
      accounts: [],
      showAccounts: [],
      accountsCount: 0,
      groupTree: [],
      groupFormGroups: [
        {
          id: 0,
          name: '无'
        }
      ],
      userFormGroups: []
    };
  },
  async mounted() {
    let res = await api.GetPagePermissonsAccountsParams();
    if (res.code === codes.Success) {
      res.data.accounts.accounts.forEach(element => {
        this.accounts.push(merge({}, element));
        this.showAccounts.push(merge({}, element));
      });
      res.data.groups.forEach(element => {
        this.userFormGroups.push(merge({}, element));
      });
      this.accountsCount = res.data.accounts.count;

      this.appendGroupTreeNode({
        id: 0,
        name: '所有部门',
        parentId: 0
      });
      this.$refs.groupTree.setCurrentKey({
        id: 0
      });
      res.data.groups.forEach(element => {
        this.groupFormGroups.push(element);
        this.appendGroupTreeNode(element);
      });
    }
  },
  methods: {
    submitUserForm() {
      this.$refs['userForm'].validate(async valid => {
        if (valid) {
          this.userForm.groupId = parseInt(this.userForm.groupId);

          if (this.userForm.id) {
            let res = await api.PutAccounts(this.userForm);
            if (res.code === codes.Success) {
              this.showUserFormModal = false;
              for (let i = 0; i < this.accounts.length; i++) {
                if (this.accounts[i].id === res.data.id) {
                  this.accounts[i] = merge(this.accounts[i], res.data);
                  break;
                }
              }
              for (let i = 0; i < this.showAccounts.length; i++) {
                if (this.showAccounts[i].id === res.data.id) {
                  this.showAccounts[i] = merge(this.showAccounts[i], res.data);
                  break;
                }
              }
              this.$message({
                message: '用户更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.userFormRules);
              for (let i in res.data) {
                if (typeof this.userFormRules[i] === 'undefined') {
                  this.userFormRules[i] = [];
                }
                this.userFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.userForm.validateField(i);
              }
              this.userFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostAccounts(this.userForm);
            if (res.code === codes.Success) {
              this.showUserFormModal = false;
              this.accounts.push(res.data);
              this.showAccounts.push(res.data);
              this.$message({
                message: '用户添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.userFormRules);
              for (let i in res.data) {
                if (typeof this.userFormRules[i] === 'undefined') {
                  this.userFormRules[i] = [];
                }
                this.userFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.userForm.validateField(i);
              }
              this.userFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          }
        } else {
          return false;
        }
      });
    },
    submitGroupForm() {
      this.$refs['groupForm'].validate(async valid => {
        if (valid) {
          this.groupForm.parentId = parseInt(this.groupForm.parentId);

          if (this.groupForm.id) {
            let res = await api.PutAccountsGroups(this.groupForm);
            if (res.code === codes.Success) {
              this.showGroupFormModal = false;
              for (let i = 0; i < this.userFormGroups.length; i++) {
                if (this.userFormGroups[i].id === res.data.id) {
                  this.userFormGroups[i] = res.data;
                  break;
                }
              }
              for (let i = 0; i < this.groupFormGroups.length; i++) {
                if (this.groupFormGroups[i].id === res.data.id) {
                  this.groupFormGroups[i] = res.data;
                  break;
                }
              }
              let node = this.$refs.groupTree.getNode({
                id: res.data.id
              });
              node.data.name = res.data.name;
              node.data.label = res.data.name;
              if (res.data.parentId !== node.data.parentId) {
                node.parentId = res.data.parentId;
                this.$refs.groupTree.remove(node);
                let parentNode = this.$refs.groupTree.getNode({
                  id: res.data.parentId
                });
                this.$refs.groupTree.append(node, parentNode);
              }
              this.$message({
                message: '部门更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              for (let i in res.data) {
                if (typeof this.groupFormRules[i] === 'undefined') {
                  this.groupFormRules[i] = [];
                }
                this.groupFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.groupForm.validateField(i);
              }
              this.groupFormRules = merge.recursive(true, {}, groupFormRules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostAccountsGroups(this.groupForm);
            if (res.code === codes.Success) {
              this.showGroupFormModal = false;
              this.userFormGroups.push(res.data);
              this.groupFormGroups.push(res.data);
              this.appendGroupTreeNode(res.data);
              this.$message({
                message: '部门添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              for (let i in res.data) {
                if (typeof this.groupFormRules[i] === 'undefined') {
                  this.groupFormRules[i] = [];
                }
                this.groupFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.groupForm.validateField(i);
              }
              this.groupFormRules = merge.recursive(true, {}, groupFormRules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          }
        } else {
          return false;
        }
      });
    },
    openEditAccount(account) {
      this.showUserFormModal = true;
      this.userFormRules = merge.recursive(true, {}, updateUserRules);
      this.userForm = merge({}, account);
      if (typeof this.$refs.userForm !== 'undefined') {
        this.$refs.userForm.resetFields();
      }
    },
    openUserFormModal() {
      this.showUserFormModal = true;
      this.userFormRules = merge.recursive(
        true,
        {},
        updateUserRules,
        createUserRules
      );
      this.userFormRules.repeatPassword.push({
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else {
            if (value !== this.userForm.password) {
              callback(new Error('两次密码不一致'));
            }
            callback();
          }
        },
        trigger: 'blur'
      });
      this.userForm = merge({}, userForm);
      if (typeof this.$refs.userForm !== 'undefined') {
        this.$refs.userForm.resetFields();
      }
    },
    openGroupFormModal() {
      this.showGroupFormModal = true;
      this.groupForm = merge({}, groupForm);
      if (typeof this.$refs.groupForm !== 'undefined') {
        this.$refs.groupForm.resetFields();
      }
    },
    openEditGroup(group) {
      this.showGroupFormModal = true;
      this.groupForm = merge({}, group);
      if (typeof this.$refs.groupForm !== 'undefined') {
        this.$refs.groupForm.resetFields();
      }
    },
    clickDimission(account) {
      let $this = this;
      this.$confirm(`标注 ${account.name} 为离职状态？`, '离职', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.PutAccountDimission({
          id: account.id
        });
        if (res.code === codes.Success) {
          for (let i = 0; i < $this.showAccounts.length; i++) {
            if ($this.showAccounts[i].id === res.data.id) {
              $this.showAccounts[i].status = res.data.status;
              $this.showAccounts[i].statusText = res.data.statusText;
            }
          }
          for (let i = 0; i < $this.accounts.length; i++) {
            if ($this.accounts[i].id === res.data.id) {
              $this.accounts[i].status = res.data.status;
              $this.accounts[i].statusText = res.data.statusText;
            }
          }
          this.$message({
            type: 'success',
            message: `已标注 ${account.name} 为离职状态`
          });
        }
      });
    },
    clickResume(account) {
      let $this = this;
      this.$confirm(`恢复 ${account.name} 为在职状态？`, '复职', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.PutAccountResume({
          id: account.id
        });
        if (res.code === codes.Success) {
          for (let i = 0; i < $this.showAccounts.length; i++) {
            if ($this.showAccounts[i].id === res.data.id) {
              $this.showAccounts[i].status = res.data.status;
              $this.showAccounts[i].statusText = res.data.statusText;
            }
          }
          for (let i = 0; i < $this.accounts.length; i++) {
            if ($this.accounts[i].id === res.data.id) {
              $this.accounts[i].status = res.data.status;
              $this.accounts[i].statusText = res.data.statusText;
            }
          }
          this.$message({
            type: 'success',
            message: `已恢复 ${account.name} 为在职状态`
          });
        }
      });
    },
    clickResetPassword(account) {
      let $this = this;
      this.$confirm(`重置 ${account.name} 的账户密码？`, '重置密码', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.PutAccountResetPassword(account.id);
        if (res.code === codes.Success) {
          this.$message({
            type: 'success',
            message: `已重置 ${account.name} 的账户密码`
          });
        }
      });
    },
    deleteGroup(group) {
      let $this = this;
      this.$confirm(`确定删除 ${group.name} ？`, '删除部门', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.DeleteAccountsGroups(group.id);
        if (res.code === codes.Success) {
          this.showGroupFormModal = false;
          for (let i = 0; i < this.groupFormGroups.length; i++) {
            if (this.groupFormGroups[i].id === group.id) {
              this.groupFormGroups.splice(i, 1);
              break;
            }
          }
          for (let i = 0; i < this.userFormGroups.length; i++) {
            if (this.userFormGroups[i].id === group.id) {
              this.userFormGroups.splice(i, 1);
              break;
            }
          }
          this.$refs.groupTree.remove({
            id: group.id
          });
          this.$refs.groupTree.setCurrentKey({
            id: 0
          });
          this.clickModule({ id: 0 });
          this.$message({
            type: 'success',
            message: `已删除 ${group.name}`
          });
        } else {
          this.$message({
            type: 'warning',
            message: res.message
          });
        }
      });
    },
    handleCommand(command) {
      switch (command) {
        case 'group':
          this.openGroupFormModal();
          break;
        case 'account': {
          this.openUserFormModal();
          break;
        }
      }
    },
    appendGroupTreeNode(element) {
      if (element.id !== 0) {
        this.$refs['groupTree'].append(
          {
            id: element.id,
            label: element.name,
            name: element.name,
            parentId: element.parentId
          },
          {
            id: element.parentId
          }
        );
      } else {
        this.$refs['groupTree'].append({
          id: element.id,
          label: element.name
        });
      }
    },
    clickModule(data) {
      if (data.id === 0) {
        this.showAccounts = this.accounts;
      } else {
        this.showAccounts = [];
        this.accounts.forEach(element => {
          if (element.groupId === data.id) {
            this.showAccounts.push(merge({}, element));
          }
        });
      }
    },
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    }
  }
};
</script>

<style lang="scss">
#page-accounts {
  .el-aside {
    padding-right: 20px;
  }
  .el-main {
    padding: 0;
    .el-card__body {
      padding: 0;
    }
    .el-table {
      border-style: none;
      border-radius: 0;
    }
  }
  .el-table td,
  .el-table th {
    padding: 5px;
  }
  .el-dropdown-menu__item {
    padding: 0;
  }
  .el-dropdown-menu span {
    display: block;
    width: 100%;
    height: 100%;
    color: red;
  }
  // tree style
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .el-button--text {
      color: #409eff;
      font-size: 12px;
      display: none;
    }
    &:hover {
      .el-button--text {
        display: initial;
      }
    }
  }
}
</style>

