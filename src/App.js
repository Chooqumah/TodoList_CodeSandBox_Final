import { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todos">
        <TodoList todos={todos} setTodos={setTodos} />
        <AddTodo setTodos={setTodos} />
      </div>
    </div>
  );
}
