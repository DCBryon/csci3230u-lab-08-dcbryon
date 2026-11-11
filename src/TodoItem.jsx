export default function TodoItem({ todo, onToggle, onDelete }) {
  // STATIC for now: the checkbox shows `done` but doesn't do anything, and the
  // delete button has no handler. Wire up the two events:
  //   - the checkbox should call onToggle(todo.id) when it changes
  //     (replace `readOnly` with onChange={() => onToggle(todo.id)})
  //   - the button should call onDelete(todo.id) when clicked
return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)} // Triggers toggleTodo in App
        />
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button> {/* Triggers deleteTodo in App */}
    </li>
  );
}