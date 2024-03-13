import React, { useState } from "react";
import { useAppDispatch } from "../hook";
import {
  removeTodo,
  toggleComplete,
  updateTodoTitle,
} from "../store/todoSlice";

interface TodoItemProp {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProp> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleToggleComplete = () => {
    dispatch(toggleComplete(id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleSaveEdit = () => {
    dispatch(updateTodoTitle({ id, newTitle }));
    setIsEditing(false);
  };

  return (
    <li
      className={`flex container mx-auto px-4 p-4 ${
        completed ? "bg-green-100" : "bg-gray-100"
      } shadow-md rounded-md mt-4`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleComplete}
        className="mr-2 cursor-pointer"
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-grow outline-none px-2 py-1 rounded-md"
        />
      ) : (
        <span className={`flex-grow ${completed ? "line-through" : ""}`}>
          {title}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleSaveEdit}
          className="text-xl text-gray-700 font-semibold ml-2 bg-green-200 px-2 py-1 rounded-lg"
        >
          Сохранить
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="cursor-pointer mr-3"
          >
            Редактировать
          </button>
          <button
            onClick={() => dispatch(removeTodo(id))}
            className="cursor-pointer text-xl text-red-500 font-semibold"
          >
            &#10005;
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
