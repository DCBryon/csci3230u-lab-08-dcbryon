import TodoItem from "./TodoItem.jsx";

// This component is done for you - it's the classic "render an array" pattern:
// map each todo to a <TodoItem>, with a STABLE `key` so React can track them.
// It already forwards onToggle / onDelete, so once App passes those handlers
// in, they reach each item.
export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p className="empty">Nothing to do. 🎉</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
