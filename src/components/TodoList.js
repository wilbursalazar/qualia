import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onRemove }) {
  if (!todos.length) {
    return <p className="empty">No todos yet.</p>;
  }

  return (
    <ul className="todoList">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
