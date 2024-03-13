import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const savedTodos = localStorage.getItem("todos");
const initialState: TodosState = savedTodos
  ? { list: JSON.parse(savedTodos) }
  : {
      list: [],
    };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
      state.list.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
