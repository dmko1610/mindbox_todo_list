interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

export default function FilterButtons({
  filter,
  setFilter,
  clearCompleted
}: FilterButtonsProps) {
  return (
    <>
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
    </>
  );
}
