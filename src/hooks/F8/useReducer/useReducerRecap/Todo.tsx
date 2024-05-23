import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import logger from "./logger";
import reducer, { initState } from "./reducer";

// Init state
// Actions
// Define action type
// Reducer

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
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

export default Todo;
