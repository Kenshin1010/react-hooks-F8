import { useState } from "react";

interface onAddTodoProps {
  onAddTodo: (title: string) => void;
}

export default function AddTodo({ onAddTodo }: onAddTodoProps) {
  const [title, setTitle] = useState<string>("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
}
