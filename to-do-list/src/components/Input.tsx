import React, { useState } from "react";

interface InputProps {
  onAddTodo: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAddTodo(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex mb-6">
      <input
        type="text"
        className="flex-grow border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="ml-3 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
