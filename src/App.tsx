import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "First task", completed: false },
    { id: 2, text: "Second task", completed: false }
  ]);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl text-red-200 font-light">todos</h1>
      <div className="bg-white shadow-md w-full max-w-lg mt-4">
        <input
          className="w-full p-4 text-gray-400 italic border-b border-gray-300 outline-none"
          placeholder="What needs to be done?"
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li className="flex items-center p-4 border-b last:border-none">
            <button
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                todo.completed
                  ? "border-green-500 text-green-500"
                  : "border-gray-400"
              }`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed && <span>&#10003;</span>}
            </button>
            <span
              className={`ml-4 text-lg ${
                todo.completed ? "line-through text-gray-400" : "text-black"
              }`}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
