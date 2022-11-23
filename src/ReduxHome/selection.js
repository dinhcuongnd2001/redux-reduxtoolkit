// export const todoListSelector = (state) => {
//   const filterTodo = state.todolist.filter((todo) =>
//     todo.name.includes(state.filter.search)
//   );
//   return filterTodo;
// };

import { createSelector } from "reselect";

export const todoList = (state) => state.todolist;
export const getSearchText = (state) => state.filter.search;
export const getStatus = (state) => state.filter.status;
export const getPriority = (state) => state.filter.priority;

export const getToDoBySelect = createSelector(
  todoList,
  getStatus,
  getPriority,
  getSearchText,
  (todos, status, priority, text) => {
    const filterTodo = todos.filter((todo) => {
      if (status === "All") {
        return (
          todo.name.includes(text) &&
          (priority.length === 0 ? true : priority.includes(todo.prioriry))
        );
      }
      return (
        todo.name.includes(text) &&
        (priority.length === 0 ? true : priority.includes(todo.prioriry)) &&
        (status === "Completed" ? todo.complete : !todo.complete)
      );
    });

    return filterTodo;
  }
);
