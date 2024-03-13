import React from "react";
interface NewTodoFromProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFromProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <label>
      <input
        type="text"
        placeholder="write new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
