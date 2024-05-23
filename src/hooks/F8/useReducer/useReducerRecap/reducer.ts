import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";
import { ActionType, StateType } from "./interfaces";

export const initState: StateType = { job: "", jobs: [] };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB: {
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    }
    //   return {
    //     ...state,
    //     jobs: state.jobs.filter((_, index) => index !== action.payload),
    //   };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
