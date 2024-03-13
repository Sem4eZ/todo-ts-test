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
      const newTodo: Todo = {
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      };
      state.list.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.list));
      }
      state.list.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    updateTodoTitle(
      state,
      action: PayloadAction<{ id: string; newTitle: string }>
    ) {
      const todoToUpdate = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToUpdate) {
        todoToUpdate.title = action.payload.newTitle;
        localStorage.setItem("todos", JSON.stringify(state.list));
      }
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, updateTodoTitle } =
  todoSlice.actions;

export default todoSlice.reducer;
