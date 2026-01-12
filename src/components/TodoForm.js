import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoInput"
        type="text"
        value={text}
        placeholder="Type a todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="primaryBtn">
        Add
      </button>
    </form>
  );
}
