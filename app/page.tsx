import TodoList from "./components/Todolist";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950">
      <TodoList />
    </main>
  );
}
