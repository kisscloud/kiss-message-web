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
              <h1 class="toolbar__title">操作日志 <span>用户带有权限的操作日志</span></h1>
            </div>
          </div>
        </template>
        <template slot="right">
          <c-level-item>
            <c-form layout="inline">
              <c-form-field>
                <c-form-input icon-start="icon-search"></c-form-input>
              </c-form-field>
            </c-form>
          </c-level-item>
        </template>
      </c-level>
    </header>
    
    
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>日志列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加用户</el-button> -->
          </div>

          <el-table
            :data="users"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="擦作者"
              width="180">
            </el-table-column>
            <el-table-column
              prop="group"
              label="角色"
              width="180">
            </el-table-column>
            <el-table-column
              prop="email"
              label="操作类型">
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="操作前的值">
            </el-table-column>
            <el-table-column
              prop="status"
              label="操作后的值">
            </el-table-column>
            <!-- <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column> -->
          </el-table>
          <br>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
          <br>
        </el-card>

  </c-main>
</template>

<script>
export default {
  name: 'PersmissionUsers',
  data() {
    return {
      users: [
        {
          name: '王小虎',
          group: '开发部',
          email: 'koyeo@qq.com',
          mobile: '1882934343',
          status: '在职'
        },
        {
          name: '王小虎',
          group: '开发部',
          email: 'koyeo@qq.com',
          mobile: '1882934343',
          status: '在职'
        },
        {
          name: '王小虎',
          group: '开发部',
          email: 'koyeo@qq.com',
          mobile: '1882934343',
          status: '在职'
        },
        {
          name: '王小虎',
          group: '开发部',
          email: 'koyeo@qq.com',
          mobile: '1882934343',
          status: '在职'
        },
        {
          name: '王小虎',
          group: '开发部',
          email: 'koyeo@qq.com',
          mobile: '1882934343',
          status: '在职'
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
              label: 'JAVA开发'
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
}
</style>

