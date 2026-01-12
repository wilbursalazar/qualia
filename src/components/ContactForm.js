import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted! (demo)");
    setForm({ firstName: "", lastName: "", email: "", comments: "" });
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="grid2">
        <label className="field">
          <span>First Name</span>
          <input
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
        </label>

        <label className="field">
          <span>Last Name</span>
          <input
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
          />
        </label>
      </div>

      <label className="field">
        <span>Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Comments</span>
        <textarea
          rows="5"
          value={form.comments}
          onChange={(e) => updateField("comments", e.target.value)}
        />
      </label>

      <button className="primaryBtn" type="submit">
        Submit
      </button>
    </form>
  );
}
