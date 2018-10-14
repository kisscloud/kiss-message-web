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
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">
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
            :data="accounts"
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
              prop="status"
              label="状态">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <span slot-scope="scope">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                <el-button type="text" size="small">编辑</el-button>
              </span>
            </el-table-column>
          </el-table>
          <!-- <br>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="accountsCount">
          </el-pagination> -->
          <br>
        </el-card>
      </el-main>
    </el-container>
    
    <el-dialog title="添加用户" :visible.sync="showUserFormModal">
      <el-form :model="userForm" :rules="userFormRules" ref="userForm">
        <el-form-item label="部门" :label-width="formLabelWidth" prop="groupId">
          <el-select filterable v-model="userForm.groupId" placeholder="请选择用户所属部门" style="width:100%;">
            <el-option v-for="item in userFormGroups" :label="item.name" :value="item.id"></el-option>
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
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" :label-width="formLabelWidth" prop="repeatPassword">
          <el-input type="password" v-model="userForm.repeatPassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showUserFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitUserForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加部门" :visible.sync="showGroupFormModal">
      <el-form :model="groupForm" :rules="groupFormRules" ref="groupForm">
        <el-form-item label="父部门" :label-width="formLabelWidth">
          <el-select v-model="groupForm.parentId" filterable placeholder="请选择父部门" style="width:100%;">
            <el-option v-for="item in groupFormGroups" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="groupForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
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
  groupId: null,
  name: null,
  username: null,
  email: null,
  mobile: null,
  password: null
};

var groupForm = {
  parentId: 0,
  name: null
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
      userFormRules: {
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
        ],
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
        ]
      },
      groupFormRules: {
        name: [
          {
            required: true,
            message: '请输入部门名称',
            trigger: 'change'
          }
        ]
      },
      accounts: [],
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
      this.accounts = res.data.accounts.accounts;
      this.accountsCount = res.data.accounts.count;
      this.userFormGroups = res.data.groups;
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
          let res = await api.PostAccounts(this.userForm);
          if (res.code === codes.Success) {
            this.showUserFormModal = false;
            this.accounts.push(res.data);
            this.$refs['userForm'].resetFields();
            this.$message({
              message: '用户添加成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitGroupForm() {
      this.$refs['groupForm'].validate(async valid => {
        if (valid) {
          this.groupForm.parentId = parseInt(this.groupForm.parentId);
          let res = await api.PostAccountsGroups(this.groupForm);
          if (res.code === codes.Success) {
            this.showGroupFormModal = false;
            this.userFormGroups.push(res.data);
            this.groupFormGroups.push(res.data);
            this.appendGroupTreeNode(res.data);
            this.$refs['groupForm'].resetFields();
            this.$message({
              message: '部门添加成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openUserFormModal() {
      this.showUserFormModal = true;
    },
    openGroupFormModal() {
      this.showGroupFormModal = true;
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
      if (element.parentId !== 0) {
        this.$refs['groupTree'].append(
          {
            id: element.id,
            label: element.name
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
}
</style>

