import { ActionType, ReducerType, StateType } from "./interfaces";

function logger(reducer: ReducerType) {
  return (prevState: StateType, action: ActionType): StateType => {
    console.group(action.type);
    console.log("Prev state: ", prevState);
    console.log("Action: ", action);
    const nextState = reducer(prevState, action);

    console.log("Next state: ", nextState);
    console.groupEnd();
    return nextState;
  };
}

export default logger;
