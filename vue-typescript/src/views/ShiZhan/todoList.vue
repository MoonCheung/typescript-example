<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <!-- 用于搜索待办事项 -->
        <input
          class="new-todo"
          v-model="state.newTodo"
          placeholder="What needs to be done?"
          @keyup="onNewTodoKeyup"
          autofocus
          autocomplete="off"
        />
      </header>
      <!-- 这个部分在默认情况下应该隐藏，当有待办事项时应该显示 -->
      <section class="main" v-if="state.todos.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="state.allDone" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <!-- 这里只是为了显示列表项的结构 -->
          <!-- 列表项在编辑时应该获得“编辑”类，在标记为完成时应该获得“完成”类 -->
          <li
            v-for="(todo, index) in state.filteredTodos"
            :key="index"
            :class="{ completed: todo.completed, editing: todo === state.editedTodo }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              v-model="todo.title"
              @blur="doneEdit(todo)"
              @keyup="onEditKeyup($event, todo)"
            />
          </li>
        </ul>
      </section>
      <!-- 这个页脚在默认情况下应该隐藏，当有待办事项时显示 -->
      <footer class="footer" v-if="state.todos.length">
        <!-- 默认情况下，这应该是“0项剩余” -->
        <span class="todo-count">
          <strong>{{ state.remaining }}</strong>
          <span>{{ state.remainingText }}</span>
        </span>
        <!-- 如果不实现路由，请删除此选项 -->
        <ul class="filters">
          <li>
            <a href="#/" :class="{ selected: state.visibility === 'all' }">All</a>
          </li>
          <li>
            <a href="#/active" :class="{ selected: state.visibility === 'active' }">
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" :class="{ selected: state.visibility === 'completed' }">
              Completed
            </a>
          </li>
        </ul>
        <!-- 如果没有完成的条目,则隐藏↓ -->
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-if="state.todos.length > remaining"
        >
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
      <!-- Change this out with your name and url ↓ -->
      <p>Created by <a href="http://todomvc.com">you</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { todoType, stateType } from '@/types/index';
import { todoStorage, filters, pluralize } from '@/utils/index';
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  watchEffect,
  watch
} from 'vue';
import '@/styles/todomvc.less';

export default defineComponent({
  name: 'TodoLists',
  setup() {
    const state: stateType = reactive({
      todos: todoStorage.fetch(),
      editedTodo: null,
      newTodo: '',
      beforeEditCache: '',
      visibility: 'all',
      remaining: computed(() => {
        return filters.active(state.todos).length;
      }),
      remainingText: computed(() => {
        return ` ${pluralize(state.remaining)} left`;
      }),
      filteredTodos: computed(() => {
        return (filters as any)[state.visibility](state.todos);
      }),
      allDone: computed({
        get: function() {
          return state.remaining === 0;
        },
        set: function(value) {
          state.todos.forEach((todo: { completed: boolean | unknown }) => {
            todo.completed = value;
          });
        }
      })
    });

    watchEffect(() => todoStorage.save(state.todos));

    onMounted(() => {
      window.addEventListener('hashchange', onHashChange);
      onHashChange();
    });

    onUnmounted(() => {
      window.removeEventListener('hashchange', onHashChange);
    });

    const onHashChange = () => {
      const visibility = window.location.hash.replace(/#\/?/, '');
      if ((filters as any)[visibility]) {
        state.visibility = visibility;
      } else {
        window.location.hash = '';
        state.visibility = 'all';
      }
    };

    /**
     * 待办事项新增触发
     */
    const onNewTodoKeyup = (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        addTode();
      }
    };

    /**
     * 增加待办事项触发
     */
    const addTode = () => {
      const value = state.newTodo && state.newTodo.trim();
      if (!value) return;
      state.todos.push({
        id: (todoStorage as any).uid++,
        title: value,
        completed: false
      });
      state.newTodo = '';
    };

    const editTodo = (todo: todoType) => {
      state.beforeEditCache = todo.title;
      state.editedTodo = todo;
    };

    /**
     * 编辑单一触发
     */
    const onEditKeyup = (event: KeyboardEvent, todo: todoType) => {
      console.log('cat event, todo:', event, todo);
      if (event.code === 'Enter') {
        doneEdit(todo);
      } else if (event.code === 'Escape') {
        cancelEdit(todo);
      }
    };

    /**
     * 编辑单一回车完成触发
     */
    const doneEdit = (todo: todoType) => {
      console.log('cat edited:', state.editedTodo);
      if (!state.editedTodo) return false;
      state.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        removeTodo(todo);
      }
    };

    /**
     * 编辑单一退出触发
     */
    const cancelEdit = (todo: todoType) => {
      state.editedTodo = null;
      todo.title = state.beforeEditCache;
    };

    /**
     * 删除单一触发
     */
    const removeTodo = (todo: todoType) => {
      state.todos.splice(state.todos.indexOf(todo), 1);
    };

    /**
     * 删除完成触发
     */
    const removeCompleted = () => {
      state.todos = filters.active(state.todos);
    };

    return {
      state,
      onNewTodoKeyup,
      editTodo,
      onEditKeyup,
      doneEdit,
      removeTodo,
      removeCompleted
    };
  }
});
</script>
