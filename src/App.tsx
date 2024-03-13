import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./hook";
import { addTodo } from "./store/todoSlice";

function App() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAction();
    }
  };

  return (
    <>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
        handleKeyDown={handleKeyDown}
      />
      <TodoList />
    </>
  );
}

export default App;
