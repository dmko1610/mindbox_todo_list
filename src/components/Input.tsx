interface InputProps {
  addTodo: (text: string) => void;
}

export default function Input({ addTodo }: InputProps) {
  return (
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
  );
}
