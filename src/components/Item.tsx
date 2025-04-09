import React from "react";
import { Task } from "../types/Task";

interface ItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 mb-2 rounded-lg shadow-sm border ${
        task.completed
          ? "bg-gray-100 line-through text-gray-500"
          : "bg-white text-gray-800"
      } hover:shadow-md transition-all`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-4 cursor-pointer"
      />
      <span
        onClick={() => onToggle(task.id)}
        className="flex-grow cursor-pointer"
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all"
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
