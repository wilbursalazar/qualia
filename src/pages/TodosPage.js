import { useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  function addTodo(text) {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const visibleTodos = useMemo(() => {
  if (filter === "completed") return todos.filter((t) => t.completed);
  if (filter === "incomplete") return todos.filter((t) => !t.completed);
  return todos;
}, [todos, filter]);

  return (
    <section>
      <h1>Todos</h1>

      {/* Side-by-side layout */}
      <div className="twoCol">
        <div className="panel">
          <h2>Add Todo</h2>
          <TodoForm onAdd={addTodo} />

             <h3>Filters</h3>
        <TodoFilters filter={filter} onChange={setFilter}/>
        </div>

        <div className="panel">
          <h2>Todo List</h2>
          <TodoList todos={visibleTodos} onToggle={toggleTodo} onRemove={removeTodo}/>
        </div>
      </div>
    </section>
  );
}
