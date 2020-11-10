/*
 * @Description: 待办事项类型
 * @Author: MoonCheung
 * @Date: 2020-11-10 23:01:34
 * @Copyright 2020 MoonCheung
 * @FilePath: \web_dynamic\web_practice\ts_project\vue-typescript\src\types\todo.ts
 */

export interface todoType {
  id: number;
  title: string;
  completed: boolean;
}

export interface stateType {
  todos: todoType[];
  editedTodo: object;
  newTodo: string;
  beforeEditCache: string;
  visibility: string;
  remaining: number;
  remainingText: string;
  filteredTodos: () => void;
  allDone: boolean | unknown;
}
