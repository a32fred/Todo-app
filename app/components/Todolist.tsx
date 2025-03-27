"use client";
import { useState } from "react";
import { useTodos } from "@/app/hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, addTodo, toggleComplete, removeTodo } = useTodos();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-1 p-2 rounded-md bg-gray-800 border border-gray-600"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700">
          ➕
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}
