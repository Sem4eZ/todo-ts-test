// TodoList.tsx
import React from "react";
import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <div className="container mx-auto px-4 mt-4">
      <ul className="grid grid-cols-1">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
