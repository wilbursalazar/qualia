import TodoForm from "../components/TodoForm";
import { useState } from "react";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  function addTodo(text) {
  setTodos((prev) => [
    ...prev,
    { id: Date.now(), text, completed: false },
  ]);
}

  return (
    <section>
      <h1>Todos</h1>

      {/* Side-by-side layout */}
      <div className="twoCol">
        <div className="panel">
          <h2>Add Todo</h2>
          <p>[tootoo]</p>

          <h3>Filters</h3>
          <p>[Filter buttons will go here]</p>
        </div>

        <div className="panel">
          <h2>Todo List</h2>
          <p>[Todo items will render here]</p>
        </div>
      </div>
    </section>
  );
}