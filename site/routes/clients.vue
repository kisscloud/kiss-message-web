<template>
  <c-main id="page-clients">
    <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <div class="cell__content">
              <h1 class="toolbar__title">授权管理<span>子系统接入授权管理</span></h1>
            </div>
          </div>
        </template>

        <template slot="right">
          <el-button @click="openClientFormModal()" type="primary" size="small">
            添加客户端
          </el-button>
        </template>
      </c-level>
    </header>
    
    <el-container>

      <el-aside style="">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>客户端列表</span>
          </div>
          <el-table
            :data="clients"
            ref="roleTable"
            :show-header="false"
            :highlight-current-row="true"
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              prop="clientName"
              label="客户端名称"
              >
            </el-table-column>
             <el-table-column
              width="60px"
              align="right"
              label="操作">
              <span slot-scope="scope" style="float:right;">
                <el-button @click="openEditClientModal(scope.row)" class="icon-pen5" type="text" size="mini"></el-button>
              </span>
            </el-table-column>
          </el-table>
          </el-card>
      </el-aside>

      <el-main>
          <el-tabs type="border-card" v-model="tabActiveName">
            <el-tab-pane label="客户端信息" name="first">
              <dl class="client-info">
                <li>
                  <dt>客户端名称</dt>
                  <dd>{{ selectClient.clientName }}</dd>
                </li>
                <li>
                  <dt>Client ID</dt>
                  <dd>{{ selectClient.clientId }}</dd>
                </li>
              </dl>
            </el-tab-pane>
            <el-tab-pane label="授权对象" name="second">              
              <el-table
                :data="authServers"
                id="authServersTable"
                >
                <el-table-column
                  prop="ip"
                  label="IP 地址"
                  min-width="120"
                  >
                </el-table-column>
                <el-table-column
                  prop="remark"
                  width="180"
                  label="备注"
                >
                </el-table-column>
                <el-table-column
                  width="180"
                  align="center"
                  label="操作">
                  <span slot-scope="scope" style="text-align: center;display: block;width: 100%;">
                    <el-button type="text" size="mini" @click="deleteAuthServer(scope.row)">删除</el-button>
                  </span>
                </el-table-column>                
              </el-table>           
              <el-button size="small" type="text" style="margin-left:7px;margin-top:10px;">添加对象</el-button>   
            </el-tab-pane>
          </el-tabs>
      </el-main>
    </el-container>

    <el-dialog :title="clientForm.id? '编辑客户端': '添加客户端'" :visible.sync="showClientFormModal">
      <el-form :model="clientForm" :rules="clientFormRules" ref="clientForm" :validate-on-rule-change="false">
        <el-form-item label="客户端名称" label-width="120px" prop="clientName">
          <el-input v-model="clientForm.clientName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="客户端状态" label-width="120px">
          <el-radio-group  v-model="clientForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-show="clientForm.id" @click="deleteClient(clientForm)" style="float:left;">删除客户端</el-button>
        <el-button @click="showClientFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitClientForm()">{{ clientForm.id? '保存': '添加' }}</el-button>
      </div>
    </el-dialog>

    <el-dialog title="查看私钥" :visible.sync="showPassowrdFormModal" width="40%">
      <el-form :model="passwordForm" :rules="passwordFormRules" ref="passwordForm" :validate-on-rule-change="false">
        <el-form-item label="用户密码" label-width="120px" prop="password">
          <el-input type="password" v-model="passwordForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showPassowrdFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitPasswordForm()">查看</el-button>
      </div>
    </el-dialog>

  </c-main>
</template>

<script>
import * as api from '../../src/api';
import * as codes from '../../src/codes';
import merge from 'merge';
import Vue from 'vue';

var clientForm = {
  clientName: null,
  status: '1'
};

var roleModuleForm = {};

export default {
  name: 'Clients',
  data() {
    return {
      showClientFormModal: false,
      showClientModuleModal: false,
      showPassowrdFormModal: false,
      tabActiveName: 'first',
      selectClient: {},
      selectModules: [],
      editClientModules: [],
      modules: [],
      accounts: [],
      selectAccounts: [],
      filterMethod(query, item) {
        return item.label.indexOf(query) > -1;
      },
      clientForm: merge({}, clientForm),
      roleModuleForm: merge({}, roleModuleForm),
      clientFormRules: {
        clientName: [
          {
            required: true,
            message: '请输入客户端名称',
            trigger: 'change'
          }
        ]
      },
      passwordForm: {
        password: null
      },
      passwordFormRules: {
        password: [
          {
            required: true,
            message: '请输入用户密码',
            trigger: 'change'
          }
        ]
      },
      clients: [],
      moduleTree: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      authServers: [
        {
          ip: '192.168.0.102',
          remark: 'Nest1'
        },
        {
          ip: '192.168.0.103',
          remark: 'Nest2'
        }
      ]
    };
  },
  async mounted() {
    let res = await api.GetPageClientsParams();

    if (res.code === codes.Success) {
      this.clients = res.data.clients || [];
      this.selectModules = res.data.firstClientModules || [];
      this.modules = res.data.allModules || [];
      this.generateModuleTree();
    }
  },
  methods: {
    submitClientForm() {
      this.$refs['clientForm'].validate(async valid => {
        if (valid) {
          if (this.clientForm.id) {
            this.clientForm.status = parseInt(this.clientForm.status);
            let res = await api.PutClient(this.clientForm);
            if (res.code === codes.Success) {
              this.showClientFormModal = false;
              for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].id === res.data.id) {
                  this.clients[i].clientName = res.data.clientName;
                  this.clients[i].status = res.data.status;
                  break;
                }
              }
              this.$message({
                message: '客户端更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              this.clientForm.status = `${this.clientForm.status}`;
              let rules = merge.recursive(true, {}, this.clientFormRules);
              for (let i in res.data) {
                if (typeof this.clientFormRules[i] === 'undefined') {
                  this.clientFormRules[i] = [];
                }
                this.clientFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.clientForm.validateField(i);
              }
              this.clientFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostClient(this.clientForm);
            if (res.code === codes.Success) {
              this.showClientFormModal = false;
              this.clients.push(res.data);
              this.$message({
                message: '客户端添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              this.clientForm.status = `${this.clientForm.status}`;
              let rules = merge.recursive(true, {}, this.clientFormRules);
              for (let i in res.data) {
                if (typeof this.clientFormRules[i] === 'undefined') {
                  this.clientFormRules[i] = [];
                }
                this.clientFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.clientForm.validateField(i);
              }
              this.clientFormRules = merge.recursive(true, {}, rules);
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
    generateModuleTree() {
      if (this.modules.length > 0) {
        this.appendModuleTreeNode({
          id: 0,
          name: '全部模块'
        });
      }
      this.modules.forEach(element => {
        this.appendModuleTreeNode(element);
      });
      if (this.clients.length > 0) {
        this.selectClient = this.clients[0];
        this.$refs.roleTable.setCurrentRow(this.clients[0]);
      }
    },
    openClientFormModal() {
      this.showClientFormModal = true;
      this.clientForm = merge({}, clientForm);
      if (this.$refs.clientForm) {
        this.$refs.clientForm.resetFields();
      }
    },
    openEditClientModal(data) {
      this.showClientFormModal = true;
      if (this.$refs.clientForm) {
        this.$refs.clientForm.resetFields();
      }
      this.clientForm = merge({}, data);
      this.clientForm.status = `${data.status}`;
    },
    openPasswordModal() {
      let $this = this;
      this.$prompt(null, '输入用户密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'password'
      }).then(async ({ value }) => {
        let res = await api.GetClientSecret({
          id: $this.selectClient.id,
          password: value
        });
        if (res.code === codes.Success) {
          $this.showPassowrdFormModal = false;
          $this.passwordForm.password = null;
          $this.$set($this.selectClient, 'clientSecret', res.data);
        } else {
          this.$message({
            message: res.message,
            type: 'warning'
          });
        }
      });
    },
    addClientModule() {
      let node = this.$refs.moduleTree.getNode({
        id: this.roleModuleForm.id
      });
      this.showClientModuleModal = false;
    },
    appendModuleTreeNode(element) {
      if (element.id !== 0) {
        this.$refs['moduleTree'].append(
          {
            id: element.id,
            label: element.name
          },
          {
            id: element.parentId
          }
        );
      } else {
        this.$refs['moduleTree'].append({
          id: element.id,
          label: element.name,
          code: element.code,
          description: element.description
        });
      }
    },
    async saveModules() {
      let modules = [];
      this.$refs['moduleTree'].getCheckedNodes().forEach(element => {
        modules.push(element.id);
      });
      if (modules.length === 0) {
        this.$message({
          message: '请选择权限',
          type: 'info'
        });
        return;
      }
      let res = await api.PutClientModules({
        clientId: this.selectClient.id,
        moduleIds: modules
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
    async handleCurrentChange(val) {
      this.selectClient = val;
      let res = await api.GetClientModules({
        id: val.id
      });
      if (res.code === codes.Success) {
        if (this.$refs.moduleTree) {
          let checkKeys = [];
          // this.editClientModules = res.data.modules;
          for (let i = 0; i < res.data.length; i++) {
            checkKeys.push(res.data[i].moduleId);
            let node = this.$refs.moduleTree.getNode({
              id: res.data[i].moduleId
            });
          }
          this.$refs.moduleTree.setCheckedKeys(checkKeys);
        }
      } else {
        this.$message({
          message: res.message,
          type: 'warning'
        });
      }
    },
    deleteClient(client) {
      let $this = this;
      this.$confirm(`删除 ${client.clientName} ？`, '删除客户端', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.DeleteClient(client.id);
        if (res.code === codes.Success) {
          for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === client.id) {
              this.clients.splice(i, 1);
              break;
            }
          }
          this.showClientFormModal = false;
          this.$message({
            type: 'success',
            message: `已删除 ${client.clientName}`
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
#page-clients {
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
  // clint info
  .client-info {
    padding: 20px;
    dt,
    dd {
      float: left;
    }
    li {
      list-style: none;
      overflow: hidden;
      line-height: 40px;
    }
    dt {
      width: 100px;
      color: #717171;
      text-align: right;
    }
  }

  .icon-eye {
    color: #000;
  }
}
</style>

