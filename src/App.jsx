import { useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  // Step 1: Hold todos in state
  const [todos, setTodos] = useState(INITIAL_TODOS);

  //declares local state for active filter, defaults to "all"
  const [filter, setFilter] = useState("all");

  // Step 2: Handlers (non-mutating)
  function addTodo(text) {
    if (!text) return;
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  // AI-assisted - see AI-USAGE.md #1
  // Filters out finished items & replaces 'todos' state with active tasks
  function clearCompleted() {
    setTodos(todos.filter((t) => !t.done));
  }
  
  const visible = todos.filter((t) =>
    filter === "active" ? !t.done : filter === "completed" ? t.done : true
  );

  
  // Step 4: Derived count
  const total = todos.length;
  const done = todos.filter(t => t.done).length;

  return (
    <main className="app">
      <h1>My To-Dos</h1>

      <AddTodoForm onAdd={addTodo} />

      {/* 4. ADDED: Rendered three filter navigation buttons.
          Each button calls `setFilter("...")` on click to update active filter state.
          The `className` dynamically applies an "active" CSS class if it matches current state. */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        {/* AI-assisted - see AI-USAGE.md #1 */}
        {/* 5. ADDED: Conditional stretch button. Only displays when at least 1 item is done (`done > 0`). */}
        {done > 0 && (
          <button onClick={clearCompleted}>Clear completed</button>
        )}
      </div>
        
        {/* 6. CHANGED: Originally passed `todos={todos}`[cite: 2].
          Now passes `todos={visible}` so `<TodoList>` renders only the filtered subset,
          without altering the main state or total count values. */}
      <TodoList
        todos={visible}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <p>
        {done} of {total} done
      </p>
    </main>
  );
}