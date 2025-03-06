import { useState } from "react";
import "./App.css";
import FilterButtons from "./components/FilterButtons";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

export type Todo = {
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
      <Input addTodo={addTodo} />
      <ul className="w-full max-w-lg drop-shadow-xl">
        {filteredTodos.map((todo) => (
          <ListElement todo={todo} toggleTodo={toggleTodo} />
        ))}
        <div className="flex bg-white justify-between items-center space-x-4 p-4 text-gray-500 text-sm">
          <span>
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <FilterButtons
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </div>
      </ul>
    </div>
  );
}
