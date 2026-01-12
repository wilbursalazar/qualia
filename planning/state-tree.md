# State Tree

## App-level state (Todos)
todosState:
  todos: [
    { id: "abc123", text: "Buy milk", completed: false },
    { id: "def456", text: "Read 10 pages", completed: true }
  ]
  filter: "all" | "completed" | "incomplete"

## Contact form state (local to Contact view)
contactFormState:
  firstName: ""
  lastName: ""
  email: ""
  comments: ""