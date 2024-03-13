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
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&#10005;</span>
    </li>
  );
};

export default TodoItem;
