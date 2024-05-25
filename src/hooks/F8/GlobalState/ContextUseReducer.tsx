// Redux vs React-context

import { actions, useStore } from "../../../store";
import { StateType } from "../../../store/interfaces";

// 1. Debugging capabilities
// 2. Middleware
// 3.
// 4. Addons and extensibility
// 5. Cross-platform and cross-framework usage
// 6. Depending on your app's setup, much better performance than working with just Context

function ContextUseReducer() {
  const { state, dispatch } = useStore();
  const { todos, todoInput } = state as StateType;

  console.log("todoInput: ", todoInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setTodoInput(e.target.value));
  };

  const handleAdd = () => {
    if (todoInput.trim()) {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
    }
  };

  console.log(todos);

  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index: number) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p>No todos yet. Add some!</p>
      )}
    </div>
  );
}

export default ContextUseReducer;
