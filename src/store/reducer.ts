import { ADD_TODO, SET_TODO_INPUT } from "./constants";
import { ActionType, StateType } from "./interfaces";

export const initState: StateType = {
  todos: [],
  todoInput: "",
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    // case DELETE_TODO:
    default:
      throw new Error("Invalid action.");
  }
}

export default reducer;
