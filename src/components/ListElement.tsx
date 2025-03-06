import { Todo } from "../App";

interface ListElementProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

export default function ListElement({ todo, toggleTodo }: ListElementProps) {
  return (
    <li
      key={todo.id}
      className="flex bg-white items-center p-4 border-b border-gray-300 last:border-none"
    >
      <button
        style={{ borderRadius: "50%", backgroundColor: "lightgray" }}
        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${
          todo.completed
            ? "border-2 border-green-500 text-green-500"
            : "border-2 border-gray-400 dark:border-gray-600 text-transparent"
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
  );
}
