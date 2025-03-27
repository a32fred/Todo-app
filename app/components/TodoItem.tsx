"use client";

import { Todo } from "../lib/types";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
};

export default function TodoItem({ todo, toggleComplete, removeTodo }: Props) {
    return(
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg shadow-md ">
        <span
          className={`flex-1 text-white ${
            todo.completed ? "line-through opacity-50" : ""
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
        <button
          onClick={() => removeTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
    );
}
