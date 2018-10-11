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
            stripe
            :show-header="false"
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
              <template slot-scope="scope">
                <el-button type="text" size="small"><i class="icon-pencil"></i></el-button>
              </template> 
            </el-table-column>
          </el-table>
          </el-card>
      </el-aside>

      <!-- 用户列表 -->
      <el-main>
          <el-tabs type="border-card" v-model="tabActiveName" @tab-click="handleClick">
            <el-tab-pane label="分配权限" name="first">
              <el-tree
                :data="data6"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
              </el-tree>
              <br>
              <el-button size="small" type="primary">保存权限</el-button>
            </el-tab-pane>
            <el-tab-pane label="分配用户" name="second">
              <el-transfer
                style="width:100%"
                filterable
                :filter-method="filterMethod"
                filter-placeholder="输入用户名"
                :titles="['已分配用户', '未分配用户']"
                 :button-texts="['分配', '移除']"
                v-model="value2"
                :data="data2">
              </el-transfer>
              <br>
              <el-button size="small" type="primary">保存用户</el-button>
            </el-tab-pane>
          </el-tabs>
      </el-main>
    </el-container>

    <el-dialog title="添加角色" :visible.sync="showRoleFormModal">
      <el-form :model="roleForm" :rules="roleFormRules" ref="roleForm">
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
            <el-radio label="生效"></el-radio>
            <el-radio label="失效"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showRoleFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitRoleForm()">确 定</el-button>
      </div>
    </el-dialog>    
  </c-main>
</template>

<script>
export default {
  name: 'PersmissionUsers',
  data() {
    const generateData2 = _ => {
      const data = [];
      const cities = ['张三', '李思', '王五', '赵六', '马七'];
      const pinyin = [
        'shanghai',
        'beijing',
        'guangzhou',
        'shenzhen',
        'nanjing',
        'xian',
        'chengdu'
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      showRoleFormModal: false,
      tabActiveName: 'first',
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      roleForm: {
        name: null,
        status: 1
      },
      roleFormRules: {
        name: [
          {
            required: true,
            message: '请输入角色名称',
            trigger: 'change'
          }
        ]
      },
      roles: [
        {
          name: '超级管理员'
        },
        {
          name: '财务审核员'
        },
        {
          name: '客服人员'
        }
      ],
      data6: [
        {
          id: 1,
          label: '技术部',
          children: [
            {
              id: 4,
              label: '前端开发'
            },
            {
              id: 5,
              label: '获取用户列表 get@account/users?groupId=10'
            }
          ]
        },
        {
          id: 2,
          label: '运营',
          children: [
            {
              id: 5,
              label: '交易所运营'
            },
            {
              id: 6,
              label: '交易所运营'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    submitRoleForm() {
      this.$refs['roleForm'].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openRoleFormModal() {
      this.showRoleFormModal = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
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
}
</style>

