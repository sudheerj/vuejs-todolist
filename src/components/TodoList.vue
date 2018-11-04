<template>
  <div class="main">
    <template>
      <el-table :data="todos"  empty-text="No Items" class="wrapper" row-key="id" @select="updateTodo" ref="todoTable">
        <el-table-column type="selection" style="width: 30px">
        </el-table-column>
        <el-table-column prop="title" width="950">
          <template slot="header" slot-scope="header">
            <div class="wrapInput">
              <el-input v-model="newTodo" size="mini" style="width: 80%; marginRight: 40px'" @keyup.enter="addTodo">
              </el-input>
            <el-button type="primary" size="mini" @click="addTodo" :disabled="newTodo.length === 0">Add</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="delete">
          <template slot-scope="scope">
            <span class="destroy" @click="deleteTodo(scope.$index, todos)"></span>
          </template>
        </el-table-column>

      </el-table>
    </template>
  </div>
</template>

<script>

export default {
  name: 'todolist',
  data: function () {
          return {
              newTodo: '',
      }
  },
  created () {
      this.$store.dispatch('loadTodos');
  },

  updated () {
      let todos = this.$store.getters.todos;
      todos.forEach(todo => {
          this.$refs.todoTable.toggleRowSelection(todo, todo.completed);
      });
  },

  // computed properties
  computed: {
      todos () {
          return this.$store.getters.todos;
      }
  },

  // methods that implement data logic.
  methods: {

      addTodo () {
          this.$store.dispatch('addTodo', this.newTodo);
          this.$store.dispatch('clearNewTodo');
          this.newTodo = '';
      },

      deleteTodo (index, rows) {
          this.$store.dispatch('deleteTodo', rows[index])
      },

      updateTodo(selection, todo) {
          this.$store.dispatch('updateTodo', todo);
      }

  }
}
</script>
<style>
  .destroy {
    display: none;
    position: absolute;
    top: 15px;
    right: 5px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
    align-content: center;
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
    margin-left: 12%;
    margin-right: 12%;
    border-right: 1px solid #ebeef5;
    height: 100%;
    padding-top: 5rem;
  }

  .wrapInput {
    width: 100%;
  }

  .el-table.cell, .el-table th div {
    padding-right: 10px;
    overflow: visible !important;
    text-overflow: ellipsis;
  }

  .el-table {
    border-radius: 0.4rem;
  }


  .el-table_1_column_1.el-table-column--selection.is-leaf .cell {
    display: none;
  }

  .el-table_2_column_4.el-table-column--selection.is-leaf .cell {
    display: none;
  }
</style>