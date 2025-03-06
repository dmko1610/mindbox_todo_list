import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "First task", completed: false },
    { id: 2, text: "Second task", completed: false }
  ]);

  const [filter, setFilter] = useState("all");

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text: string) => {
    if (text.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl text-red-200 font-light">todos</h1>
      <div className="bg-white drop-shadow-sm w-full max-w-lg mt-4">
        <input
          className="w-full p-4 text-gray-400 italic border-b border-gray-300 outline-none"
          placeholder="What needs to be done?"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
      </div>
      <ul className="w-full max-w-lg drop-shadow-xl">
        {filteredTodos.map((todo) => (
          <li className="flex bg-white items-center p-4 border-b border-gray-300 last:border-none">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                todo.completed
                  ? "border-2 border-green-500 text-green-500"
                  : "border-2 border-gray-400 text-transparent"
              }`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed && <span className="text-xl">&#10003;</span>}
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
        <div className="flex bg-white justify-between items-center space-x-4 p-4 text-gray-500 text-sm">
          <span>
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <div className="flex space-x-2">
            <button
              className={`p-2 ${
                filter === "all" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`p-2 ${
                filter === "active" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`p-2 ${
                filter === "completed" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
          <button className="p-2 ml-6 bg-red-500" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </ul>
    </div>
  );
}
