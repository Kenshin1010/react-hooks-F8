import { useReducer, useRef } from "react";

// Init state
interface StateType {
  job: string;
  jobs: string[];
}

const initState: StateType = { job: "", jobs: [] };

// Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

interface SetJobAction {
  type: typeof SET_JOB;
  payload: string;
}

interface AddJobAction {
  type: typeof ADD_JOB;
  payload: string;
}

interface DeleteJobAction {
  type: typeof DELETE_JOB;
  payload: number;
}

// Define action type
type ActionType = SetJobAction | AddJobAction | DeleteJobAction;

const setJob = (payload: string): SetJobAction => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload: string): AddJobAction => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload: number): DeleteJobAction => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// Reducer
const reducer = (state: StateType, action: ActionType): StateType => {
  console.log("reducer running...");
  console.log("Action: ", action);
  console.log("Prev state: ", state);

  let newState: StateType;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      {
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newJobs,
        };
      }
      //   newState = {
      //     ...state,
      //     jobs: state.jobs.filter((_, index) => index !== action.payload),
      //   };
      break;
    default:
      throw new Error("Invalid action");
  }

  console.log("New state: ", newState);
  return newState;
};
function TodoAppUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <li key={index}>
              {job}{" "}
              <button onClick={() => dispatch(deleteJob(index))}>
                &times;
              </button>
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
}

export default TodoAppUseReducer;
