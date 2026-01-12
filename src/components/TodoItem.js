export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todoItem">
      <label className="todoLeft">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "todoText done" : "todoText"}>
          {todo.text}
        </span>
      </label>

      <button className="dangerBtn" onClick={() => onRemove(todo.id)}>
        X
      </button>
    </li>
  );
}
