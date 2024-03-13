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

  return (
    <>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </>
  );
}

export default App;
