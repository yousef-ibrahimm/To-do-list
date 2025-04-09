import React from "react";
import { Task } from "../types/Task";
import TodoItem from "./Item";

interface ListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default List;
