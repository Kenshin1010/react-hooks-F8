import { ADD_TODO, SET_TODO_INPUT } from "./constants";
import { AddTodoAction, SetTodoInputAction } from "./interfaces";

export const setTodoInput = (payload: string): SetTodoInputAction => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload: string): AddTodoAction => ({
  type: ADD_TODO,
  payload,
});

// export const deleteTodo = (payload: number): DeleteTodoAction => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };
