<template>
  <c-main id="page-roles">
    <header class="toolbar">
      <c-level>
        <template slot="left">
                <div class="cell">
                  <!-- <div class="cell__media">
                    <i class="icon-footprint"></i>
                  </div> -->
                  <div class="cell__content">
                    <h1 class="toolbar__title">角色管理 <span>平台角色管理</span></h1>
                  </div>
                </div>
</template>

<template slot="right">
  <el-button @click="openRoleFormModal()" type="primary" size="small">
    添加角色
  </el-button>
  <!-- <c-level-item><c-button icon-start="icon-plus-circle" type="info" smart>添加</c-button></c-level-item> -->
</template>
      </c-level>
    </header>
    
    <el-container>

      <!-- 部门控件 -->
      <el-aside style="">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>角色列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加部门</el-button> -->
          </div>
          <el-table
            :data="roles"
            ref="roleTable"
            :show-header="false"
            :highlight-current-row="true"
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="角色名称"
              >
            </el-table-column>
             <el-table-column
              width="60px"
              align="right"
              label="操作">
              <span slot-scope="scope" style="float:right;">
                <el-button @click="openEditRoleModal(scope.row)" class="icon-pen5" type="text" size="mini"></el-button>
              </span>
            </el-table-column>
          </el-table>
          </el-card>
      </el-aside>

      <!-- 用户列表 -->
      <el-main>
          <el-tabs type="border-card" v-model="tabActiveName">
            <el-tab-pane label="分配权限" name="first">
              <el-tree
                :data="permissionTree"
                ref="permissionTree"
                show-checkbox
                node-key="id"
                :default-expand-all="true"
                :default-checked-keys="selectPermissions"
                @check-change="openRolePermissionModal"
                :props="defaultProps">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ data.label }}</span>
                  <span>
                    <el-button
                      type="text"
                      class="option-type"
                      size="mini">
                      {{ data.id === 'module0' ? '类型' : (data.code ? '权限' : '模块') }}
                    </el-button>
                    <el-button
                      type="text"
                      class="permission-code"
                      size="mini">
                      {{ data.id === 'module0' ? '权限码' : (data.limitString || data.code || '-'  )}}
                    </el-button>
                    <el-button
                      type="text"
                      class="permission-description"
                      size="mini">
                      {{ data.id === 'module0' ? '权限描述' : (data.limitDescription || '-')}}
                    </el-button>
                  </span>
                </span>
              </el-tree>
              <br>
              <el-button v-show="permissionTree.length != 0" size="small" type="primary" @click="savePermissions()">绑定权限</el-button>
            </el-tab-pane>
            <el-tab-pane label="分配用户" name="second">
              <el-transfer
                style="width:100%"
                filterable
                :filter-method="filterMethod"
                filter-placeholder="输入用户名"
                :titles="['未分配用户', '已分配用户']"
                :button-texts="['移除','分配']"
                v-model="selectAccounts"
                :data="accounts">
              </el-transfer>
              <br>
              <el-button size="small" type="primary" @click="saveAccounts()">绑定用户</el-button>
            </el-tab-pane>
          </el-tabs>
      </el-main>
    </el-container>

    <el-dialog :title="roleForm.id? '编辑角色': '添加角色'" :visible.sync="showRoleFormModal">
      <el-form :model="roleForm" :rules="roleFormRules" ref="roleForm" :validate-on-rule-change="false">
        <!-- <el-form-item label="父部门" label-width="80px">
          <el-select v-model="form2.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="角色名称" label-width="80px" prop="name">
          <el-input v-model="roleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色状态" label-width="80px">
          <el-radio-group  v-model="roleForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-show="roleForm.id" @click="deleteRole(roleForm)" style="float:left;">删除角色</el-button>
        <el-button @click="showRoleFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitRoleForm()">{{ roleForm.id? '保存': '添加' }}</el-button>
      </div>
    </el-dialog>

      <el-dialog title="配置角色权限" :visible.sync="showRolePermissionModal">
      <el-form :model="rolePermissionForm" ref="rolePermissionForm" :validate-on-rule-change="false">      
        <el-form-item label="权限名称" label-width="120px" prop="name">
          <el-input :disabled="true" v-model="rolePermissionForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限码" label-width="120px">
          <el-input placeholder="输入数据限制参数" v-model="rolePermissionForm.limitString">
          <span slot="prepend">{{ rolePermissionForm.code }}?</span>
          </el-input>
          <p class="limit-fields">{{ rolePermissionForm.limitFields }}</p>
        </el-form-item>
        <el-form-item label="角色权限描述" label-width="120px">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="输入角色权限描述"
            v-model="rolePermissionForm.limitDescription">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showRolePermissionModal = false">取 消</el-button>
        <el-button type="primary" @click="addRolePermission(rolePermissionForm)">保存</el-button>
      </div>
    </el-dialog> 
  </c-main>
</template>

<script>
import * as api from '../../../src/api';
import * as codes from '../../../src/codes';
import merge from 'merge';

var roleForm = {
  name: null,
  status: '1'
};

var rolePermissionForm = {};

export default {
  name: 'PersmissionUsers',
  data() {
    return {
      showRoleFormModal: false,
      showRolePermissionModal: false,
      couldShowRolePermissionModal: false,
      tabActiveName: 'first',
      selectRole: {},
      selectPermissions: [],
      editRolePermissions: [],
      accounts: [],
      selectAccounts: [],
      filterMethod(query, item) {
        return item.label.indexOf(query) > -1;
      },
      roleForm: merge({}, roleForm),
      rolePermissionForm: merge({}, rolePermissionForm),
      roleFormRules: {
        name: [
          {
            required: true,
            message: '请输入角色名称',
            trigger: 'change'
          }
        ]
      },
      roles: [],
      permissionTree: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  async mounted() {
    let res = await api.GetPagePermissionRolesParams();

    if (res.code === codes.Success) {
      this.roles = res.data.roles;
      this.selectPermissions = res.data.firstRolePermissions;
      this.selectAccounts = res.data.firstRoleAccounts;
      this.couldShowRolePermissionModal = true;
      if (res.data.modules.length > 0) {
        this.appendPermissionTreeNode({
          id: 0,
          name: '全部权限'
        });
      }
      res.data.modules.forEach(element => {
        this.appendPermissionTreeNode(element);
      });
      if (this.roles.length > 0) {
        this.selectRole = this.roles[0];
        this.$refs.roleTable.setCurrentRow(this.roles[0]);
      }
      res.data.accounts.accounts.forEach(element => {
        this.accounts.push({
          label: element.name,
          key: element.id
        });
      });
      res.data.permissions.forEach(element => {
        this.$refs.permissionTree.append(
          {
            id: element.id,
            type: 'permission',
            label: element.name,
            code: element.code,
            limitFields: element.limitFields,
            limitString: '',
            limitDescription: ''
          },
          {
            id: 'module' + element.moduleId
          }
        );
      });
    }
  },
  methods: {
    submitRoleForm() {
      this.$refs['roleForm'].validate(async valid => {
        if (valid) {
          if (this.roleForm.id) {
            this.roleForm.status = parseInt(this.roleForm.status);
            let res = await api.PutRoles(this.roleForm);
            if (res.code === codes.Success) {
              this.showRoleFormModal = false;
              for (let i = 0; i < this.roles.length; i++) {
                if (this.roles[i].id === res.data.id) {
                  this.roles[i].name = res.data.name;
                  this.roles[i].status = res.data.status;
                  break;
                }
              }
              this.$message({
                message: '角色更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              this.roleForm.status = `${this.roleForm.status}`;
              let rules = merge.recursive(true, {}, this.roleFormRules);
              for (let i in res.data) {
                if (typeof this.roleFormRules[i] === 'undefined') {
                  this.roleFormRules[i] = [];
                }
                this.roleFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.roleForm.validateField(i);
              }
              this.roleFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostRoles(this.roleForm);
            if (res.code === codes.Success) {
              this.showRoleFormModal = false;
              this.roles.push(res.data);
              this.$message({
                message: '角色添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              this.roleForm.status = `${this.roleForm.status}`;
              let rules = merge.recursive(true, {}, this.roleFormRules);
              for (let i in res.data) {
                if (typeof this.roleFormRules[i] === 'undefined') {
                  this.roleFormRules[i] = [];
                }
                this.roleFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.roleForm.validateField(i);
              }
              this.roleFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openRoleFormModal() {
      this.showRoleFormModal = true;
      this.roleForm = merge({}, roleForm);
      if (this.$refs.roleForm) {
        this.$refs.roleForm.resetFields();
      }
    },
    openEditRoleModal(data) {
      this.showRoleFormModal = true;
      if (this.$refs.roleForm) {
        this.$refs.roleForm.resetFields();
      }
      this.roleForm = merge({}, data);
      this.roleForm.status = `${data.status}`;
    },
    openRolePermissionModal(data, checked) {
      if (
        data.type == 'permission' &&
        checked &&
        this.couldShowRolePermissionModal
      ) {
        this.rolePermissionForm = merge({}, rolePermissionForm);
        this.showRolePermissionModal = true;
        this.rolePermissionForm.id = data.id;
        this.rolePermissionForm.code = data.code;
        this.rolePermissionForm.name = data.label;
        this.rolePermissionForm.limitFields = data.limitFields;
        for (let i = 0; i < this.editRolePermissions.length; i++) {
          if (this.editRolePermissions[i].permissionId === data.id) {
            this.rolePermissionForm.limitString = this.editRolePermissions[
              i
            ].limitString;
            this.rolePermissionForm.limitDescription = this.editRolePermissions[
              i
            ].limitDescription;
          }
        }
      }
    },
    addRolePermission() {
      let node = this.$refs.permissionTree.getNode({
        id: this.rolePermissionForm.id
      });
      node.data.limitString = this.rolePermissionForm.limitString;
      node.data.limitDescription = this.rolePermissionForm.limitDescription;
      this.showRolePermissionModal = false;
    },
    appendPermissionTreeNode(element) {
      if (element.id !== 0) {
        this.$refs['permissionTree'].append(
          {
            id: 'module' + element.id,
            label: element.name
          },
          {
            id: 'module' + element.parentId
          }
        );
      } else {
        this.$refs['permissionTree'].append({
          id: 'module' + element.id,
          label: element.name,
          code: element.code,
          description: element.description
        });
      }
    },
    async savePermissions() {
      let permissions = [];
      this.$refs['permissionTree'].getCheckedNodes().forEach(element => {
        if (typeof element.code !== 'undefined' && element.code) {
          console.log(element)
          permissions.push({
            permissionId: element.id,
            limitString: element.limitString,
            limitDescription: element.limitDescription
          });
        }
      });
      if (permissions.length === 0) {
        this.$message({
          message: '请选择权限',
          type: 'info'
        });
        return;
      }
      let res = await api.PostRolePermissions({
        roleId: this.selectRole.id,
        permissions: permissions
      });
      if (res.code === codes.Success) {
        this.$message({
          message: '权限绑定成功',
          type: 'success'
        });
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    },
    async saveAccounts() {
      if (this.selectAccounts.length === 0) {
        this.$message({
          message: '请选择用户',
          type: 'info'
        });
        return;
      }
      let res = await api.PostRolesAccounts({
        id: this.selectRole.id,
        accountIds: this.selectAccounts
      });
      if (res.code === codes.Success) {
        this.$message({
          message: '用户绑定成功',
          type: 'success'
        });
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    },
    async handleCurrentChange(val) {
      this.selectRole = val;
      let res = await api.GetRolePermissionIdsAndAccountIds({
        id: val.id
      });
      if (res.code === codes.Success) {
        if (this.$refs.permissionTree) {
          let checkKeys = [];
          this.editRolePermissions = res.data.permissions;
          for (let i = 0; i < res.data.permissions.length; i++) {
            checkKeys.push(res.data.permissions[i].permissionId);
            let node = this.$refs.permissionTree.getNode({
              id: res.data.permissions[i].permissionId
            });
            if (res.data.permissions[i].limitString) {
              node.data.limitString = `${node.data.code}?${
                res.data.permissions[i].limitString
              }`;
            }
            if (res.data.permissions[i].limitDescription) {
              node.data.limitDescription =
                res.data.permissions[i].limitDescription;
            }
          }
          this.$refs.permissionTree.setCheckedKeys(checkKeys);
        }
        this.couldShowRolePermissionModal = false;
        this.selectAccounts = res.data.accounts;
        setTimeout(() => {
          this.couldShowRolePermissionModal = true;
        }, 50);
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    },
    deleteRole(role) {
      let $this = this;
      this.$confirm(`删除 ${role.name} ？`, '删除角色', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.DeleteRole(role.id);
        if (res.code === codes.Success) {
          for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i].id === role.id) {
              this.roles.splice(i, 1);
              break;
            }
          }
          this.showRoleFormModal = false;
          this.$message({
            type: 'success',
            message: `已删除 ${role.name}`
          });
        }
      });
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
      // if (dropNode.data.label === '二级 3-1') {
      //   return type !== 'inner';
      // } else {
      //   return true;
      // }
    },
    allowDrag(draggingNode) {
      // return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    }
  }
};
</script>

<style lang="scss">
#page-roles {
  .el-aside {
    padding-right: 30px;
    .el-card__body {
      padding: 0;
    }
    .el-table {
      border-style: none;
      border-radius: 0;
    }
    .el-table th,
    .el-table tr {
      cursor: pointer;
    }
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
  .el-transfer-panel {
    width: calc(50% - 62px);
  }
  .icon-pencil {
    font-size: 13px;
  }
  // role list style

  .icon-pen5 {
    color: #409eff;
    font-size: 12px;
    visibility: hidden;
  }
  .el-table__row:hover {
    .icon-pen5 {
      visibility: visible;
    }
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
      color: #a2a2a2;
    }
  }
  .option-type {
    position: relative;
    top: 1px;
    width: 50px;
  }
  .permission-code {
    min-width: 200px;
    text-align: left;
  }
  .permission-description {
    min-width: 200px;
    text-align: left;
  }

  // form style
  .limit-fields {
    margin-bottom: -16px;
    font-size: 12px;
    color: #909090;
  }
  .el-input.is-disabled .el-input__inner {
    color: #777777;
  }
}
</style>

