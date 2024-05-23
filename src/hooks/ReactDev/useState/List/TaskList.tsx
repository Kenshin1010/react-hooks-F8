import { useState } from "react";

export type TodoType = {
  id: number;
  title: string;
  done: boolean;
};

type TaskListType = {
  todos: TodoType[];
  onChangeTodo: (updatedTodo: TodoType) => void;
  onDeleteTodo: (id: number) => void;
};

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListType) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

type TaskType = {
  todo: TodoType;
  onChange: (updatedTodo: TodoType) => void;
  onDelete: (id: number) => void;
};

function Task({ todo, onChange, onDelete }: TaskType) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
