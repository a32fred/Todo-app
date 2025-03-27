"use client";
import { useState, useEffect } from "react";
import { Todo } from "@/app/lib/types";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 🔹 Carregar os dados do localStorage ao iniciar
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 🔹 Salvar os dados no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleComplete, removeTodo };
}
