import { ActionType, ReducerType, StateType } from "./interfaces";

function logger(reducer: ReducerType) {
  return (prevState: StateType, action: ActionType): StateType => {
    console.group(action.type);
    console.log("Prev state: ", prevState);
    console.log("Action: ", action);
    // Call the original reducer to get the new state
    const newState = reducer(prevState, action);
    console.log("Next state: ", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
