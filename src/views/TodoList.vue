<template>
  <div class="main">
    <template>
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"  empty-text="No Items" class="wrapper">
        <el-table-column prop="name" type="selection" style="width: 5px">

        </el-table-column>
        <el-table-column prop="name" width="750">
          <template slot="header" slot-scope="slot">
            <div class="wrapInput">
            <el-input v-model="search" size="mini" style="width: 75%">
            </el-input>
            <el-button type="primary"
                    size="mini"
                    @click="handleAdd(scope.$index, scope.row)">Add</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="delete" >
          <template slot-scope="scope">
            <button class="destroy" @click="removeTodo(todo)"></button>
          </template>
        </el-table-column>

      </el-table>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'todolist',
  components: {
    HelloWorld
  },
  data: function () {
          return {
              tableData: [{name: "sudheer"}, {name: "jonna"}],
              search: '',
      }
  }
}
</script>
<style>
  .el-table_1_column_1.el-table-column--selection.is-leaf .cell {
    display: none;
  }

  .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }

  .destroy:hover {
    color: #af5b5e;
  }

  .destroy:after {
    content: '×';
  }

  tr:hover .destroy {
    display: block;
  }

  .wrapper {
    border: 1px solid #ebeef5;
  }

  .main {
    margin-left: 5%;
    margin-right: 5%;
    border-right: 1px solid #ebeef5;
    height: 100%;
  }

  .wrapInput {
    width: 100%;
  }

  .el-table.cell, .el-table th div {
    padding-right: 10px;
    overflow: visible !important;
    text-overflow: ellipsis;
  }
</style>