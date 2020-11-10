/*
 * @Description: 工具类
 * @Author: MoonCheung
 * @Date: 2020-11-07 21:51:31
 * @Copyright 2020 MoonCheung
 * @FilePath: \web_dynamic\web_practice\ts_project\vue-typescript\src\utils\index.ts
 */

const TODO_KEY: string = 'todo_vue3';

export const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
    todos.forEach((todo: any, index: number) => {
      todo.id = index;
    });
    (todoStorage as any).uid = todos.length;
    return todos;
  },
  save(todos: any) {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }
};

export const filters = {
  all(todos: any) {
    return todos;
  },
  active(todos: any) {
    return todos.filter((todo: any) => {
      return !todo.completed;
    });
  },
  completed(todos: any) {
    return todos.filter((todo: any) => {
      return todo.completed;
    });
  }
};

export function pluralize(n: number) {
  return n === 1 ? 'item' : 'items';
}
