<template>
  <c-main id="page-permissions">
   <header class="toolbar">
      <c-level>
        <template slot="left">
          <div class="cell">
            <!-- <div class="cell__media">
              <i class="icon-footprint"></i>
            </div> -->
            <div class="cell__content">
              <h1 class="toolbar__title">权限管理 <span>管理平台所有的功能权限</span></h1>
            </div>
          </div>
        </template>
        <template slot="right">
          <!-- <c-level-item>
            <el-input style="width=300px;" size="small" placeholder="输入权限名称/权限码">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </c-level-item> -->
          <el-dropdown @command="handleCommand">
            <el-button type="primary" size="small">
              添加
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="permission">添加权限</el-dropdown-item>
              <el-dropdown-item command="module">添加模块</el-dropdown-item>
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
              <span>模块列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加部门</el-button> -->
          </div>
          <el-tree
          :data="moduleTree"
          node-key="id"
          ref="moduleTree"
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
              <span>权限列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加用户</el-button> -->
          </div>

          <el-table
            :data="permissions"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="权限名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="moduleName"
              label="权限模块"
              width="180">
            </el-table-column>
            <el-table-column
              prop="typeText"
              label="类型">
            </el-table-column>
            <el-table-column
              prop="code"
              label="权限码">
            </el-table-column>
            <el-table-column
              prop="statusText"
              label="状态">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- <br> -->
          <!-- <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination> -->
          <!-- <br> -->
        </el-card>
      </el-main>
    </el-container>

    <el-dialog title="添加权限" :visible.sync="showPermissionFormModal">
      <el-form :model="permissionForm" :rules="permissionFormRules" ref="permissionForm">
        <el-form-item label="所属模块" :label-width="formLabelWidth" prop="moduleId">
          <el-select v-model="permissionForm.moduleId" placeholder="请选择权限模块" style="width:100%;">
            <el-option v-for="item in permissionFormModules" v-bind:key="'permissionForm_'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="permissionForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限类型" :label-width="formLabelWidth" prop="type">
          <el-select v-model="permissionForm.type" placeholder="请选择权限类型" style="width:100%;">
            <el-option label="接口" value="1"></el-option>
            <el-option label="菜单" value="2"></el-option>
            <el-option label="按钮" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限码" :label-width="formLabelWidth" prop="code">
          <el-input v-model="permissionForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限状态" :label-width="formLabelWidth">
          <el-radio-group v-model="permissionForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showPermissionFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitPermissionForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加权限模块" :visible.sync="showPermissionModuleFormModal">
      <el-form :model="moduleForm" :rules="moduleFormRules" ref="moduleForm">
        <el-form-item label="父模块" :label-width="formLabelWidth">
          <el-select v-model="moduleForm.parentId" placeholder="请选择父模块" style="width:100%;">
            <el-option v-for="item in moduleFormModules" v-bind:key="'moduleForm_'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模块名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="moduleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="模块状态" :label-width="formLabelWidth">
          <el-radio-group v-model="moduleForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showPermissionModuleFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitModuleForm()">确 定</el-button>
      </div>
    </el-dialog>
  </c-main>
</template>

<script>
import * as api from '../../../src/api';
import * as codes from '../../../src/codes';
import merge from 'merge';

var moduleForm = {
  parentId: 0,
  name: null,
  status: '1'
};

var permissionForm = {
  moduleId: null,
  name: null,
  type: '1',
  code: null,
  status: '1'
};

export default {
  name: 'PersmissionUsers',
  data() {
    return {
      showPermissionModuleFormModal: false,
      showPermissionFormModal: false,
      formLabelWidth: '80px',
      moduleForm: merge({}, moduleForm),
      permissionForm: merge({}, permissionForm),
      permissionFormRules: {
        moduleId: [
          { required: true, message: '请选择所属模块', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入权限名称', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择权限类型', trigger: 'change' }
        ],
        code: [{ required: true, message: '请输入权限码', trigger: 'change' }]
      },
      moduleFormRules: {
        name: [{ required: true, message: '请输入模块名称', trigger: 'change' }]
      },
      permissions: [],
      moduleTree: [],
      moduleFormModules: [{ id: 0, name: '无' }],
      permissionFormModules: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  async mounted() {
    let res = await api.GetPagePermissionPermissionsParams();
    if (res.code === codes.Success) {
      this.permissions = res.data.permissions;
      this.permissionFormModules = res.data.modules;
      res.data.modules.forEach(element => {
        this.appendModuleTreeNode(element);
        this.moduleFormModules.push(element);
      });
    }
  },
  methods: {
    submitPermissionForm() {
      this.$refs['permissionForm'].validate(async valid => {
        if (valid) {
          this.permissionForm.moduleId = parseInt(this.permissionForm.moduleId);
          this.permissionForm.status = parseInt(this.permissionForm.status);
          let res = await api.PostPermissions(this.permissionForm);
          if (res.code === codes.Success) {
            this.showPermissionFormModal = false;
            this.permissions.push(res.data);
            this.$refs['permissionForm'].resetFields();
            this.permissionForm = merge({}, permissionForm);
            this.$message({
              message: '权限添加成功',
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
    submitModuleForm() {
      this.$refs['moduleForm'].validate(async valid => {
        if (valid) {
          this.moduleForm.parentId = parseInt(this.moduleForm.parentId);
          this.moduleForm.status = parseInt(this.moduleForm.status);
          let res = await api.PostPermissionsModules(this.moduleForm);
          if (res.code === codes.Success) {
            this.showPermissionModuleFormModal = false;
            this.permissionFormModules.push(res.data);
            this.moduleFormModules.push(res.data);
            this.appendModuleTreeNode(res.data);
            this.$refs['moduleForm'].resetFields();
            this.moduleForm = merge({}, moduleForm);
            this.$message({
              message: '模块添加成功',
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
    openPermissionModuleFormModal() {
      this.showPermissionModuleFormModal = true;
    },
    openPermissionFormModal() {
      this.showPermissionFormModal = true;
    },
    handleCommand(command) {
      switch (command) {
        case 'permission':
          this.openPermissionFormModal();
          break;
        case 'module': {
          this.openPermissionModuleFormModal();
          break;
        }
      }
    },
    appendModuleTreeNode(element) {
      if (element.parentId !== 0) {
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
#page-permissions {
  .el-aside {
    padding-right: 30px;
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
  // .el-table--border::after,
  // .el-table--group::after,
  // .el-table::before {
  // background-color: #fff;
  // }
}
</style>

