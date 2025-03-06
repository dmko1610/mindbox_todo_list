import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Test task", completed: false }
  ]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="">todos</h1>
      <div className="">
        <input placeholder="What need to be done?" />
      </div>
      <ul>
        {/* {todos.map(todo => )} */}
      </ul>
    </div>
  );
}
