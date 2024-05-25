import { ADD_TODO, SET_TODO_INPUT } from "./constants";

export interface StateType {
  todos: string[];
  todoInput: string;
}

export interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}

export type ReducerType = (state: StateType, action: ActionType) => StateType;

export interface SetTodoInputAction {
  type: typeof SET_TODO_INPUT;
  payload: string;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

// export interface DeleteTodoAction {
//   type: typeof DELETE_TODO;
//   payload: number;
// }

export type ActionType = SetTodoInputAction | AddTodoAction;
// | DeleteTodoAction;
