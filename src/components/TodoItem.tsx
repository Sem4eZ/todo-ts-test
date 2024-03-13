// TodoItem.tsx
import React from "react";
import { useAppDispatch } from "../hook";
import { removeTodo, toggleComplete } from "../store/todoSlice";

interface TodoItemProp {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProp> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li
      className={`flex container mx-auto px-4 p-4 ${
        completed ? "bg-green-100" : "bg-gray-100"
      } shadow-md rounded-md mt-4`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
        className="mr-2 cursor-pointer"
      />
      <span className={`flex-grow ${completed ? "line-through" : ""}`}>
        {title}
      </span>
      <button
        onClick={() => dispatch(removeTodo(id))}
        className="cursor-pointer text-xl text-red-500 font-semibold"
        
      >
        &#10005;
      </button>
    </li>
  );
};

export default TodoItem;
