import { useState } from "react";

export default function AddTodoForm({ onAdd }) {

  //Declared local state (`text`) initialized to an empty string ("")
  const [text, setText] = useState("");

  // AI-assisted - see AI-USAGE.md #2
  function handleSubmit(event) {
    event.preventDefault();
    //reads directly from the `text` state variable instead of inspecting raw DOM elements
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* AI-assisted - see AI-USAGE.md #2
      converted from uncontrolled input to a controlled component*/}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo…"
      />
      <button type="submit">Add</button>
    </form>
  );
}