export default function TodoFilters({ filter, onChange }) {
  return (
    <div className="filters">
      <span className="filtersLabel">Filter:</span>

      <button
        type="button"
        className={filter === "all" ? "chip active" : "chip"}
        onClick={() => onChange("all")}
      >
        All
      </button>

      <button
        type="button"
        className={filter === "completed" ? "chip active" : "chip"}
        onClick={() => onChange("completed")}
      >
        Completed
      </button>

      <button
        type="button"
        className={filter === "incomplete" ? "chip active" : "chip"}
        onClick={() => onChange("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}
