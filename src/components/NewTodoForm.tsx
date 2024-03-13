// NewTodoForm.tsx
import React from "react";

interface NewTodoFromProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const NewTodoForm: React.FC<NewTodoFromProps> = ({
  value,
  updateText,
  handleAction,
  handleKeyDown,
}) => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <label className="flex items-center">
        <input
          type="text"
          placeholder="Напиши задачу"
          value={value}
          onChange={(e) => updateText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow px-3 py-2 mr-2 border rounded-md shadow-sm focus:outline-none"
        />
        <button
          onClick={handleAction}
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Добавить
        </button>
      </label>
    </div>
  );
};

export default NewTodoForm;
