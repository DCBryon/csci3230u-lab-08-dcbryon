# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — <App.jsx>
- **Date:** 2026-11-11
- **Tool / model:** <Gemini 3.6>
- **Files:** `src/App.jsx`
- **Prompt (verbatim):**

  ```
  Add filter state for All, Active, and Completed views in src/App.jsx. Derive the visible to-do items dynamically based on the active filter without storing a second list in state, render filter selection buttons, pass the filtered list to TodoList, and add a 'Clear completed' button to remove finished tasks.
  ```

- **What it produced & what I kept / changed / rejected:** <1–3 sentences — and why the
  result is correct>

I kept:
  `filter` state hook defaulting to `"all"`.
  Inline derived filtering expression (`visible`) computing filtered items during render.
  Filter selection buttons and `clearCompleted()` stretch handler function.

I changed:
  Updated `<TodoList>` prop from `todos={todos}` to `todos={visible}`

I rejected:
  Initial AI suggestion to store filtered items in a second `useState` array synchronized via `useEffect`.
---
### #2 — <AddTodoForm.jsx>
- **Date:** 2026-11-11
- **Tool / model:** <Gemini 3.6>
- **Files:** `src/AddTodoForm.jsx`
- **Prompt (verbatim):**

  ```
 "Refactor `src/AddTodoForm.jsx` to make the text input a controlled component driven by React state. Manage the field text in local state, handle form submission by trimming the text and passing it to `onAdd`, and clear the input field on submission."
  ```

- **What it produced & what I kept / changed / rejected:** <1–3 sentences — and why the
  result is correct>

I kept:
  - `useState("")` hook initialization.
  - `value` and `onChange` attributes binding the input to state.
  - Form submit handler that trims state text, calls `onAdd`, and resets state to empty string.

I changed:
  - Replaced DOM element lookup (`event.target.elements.text.value`) with local state reading.
  - Replaced direct DOM mutation (`input.value = ""`) with state setter call (`setText("")`).

I rejected:
  Trimming input text inside `onChange` on every keypress, deferring `.trim()` strictly to submit.

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** (2–3 sentences. e.g. it mutated
  state instead of copying, used a stale/old React idiom, missed an edge case, or
  over-engineered something simple.)

- **Explain-every-line check:** I can explain every line of the AI-assisted code in this
  lab and why it's correct. ☐  *(Your TA may ask you to walk through any of it.)*

AddTodoForm.jsx
  * `const trimmed = text.trim()`: Strips whitespace from state value prior to submit.
  * `setText("")`: Clears the controlled input by updating React state.
  * `value={text}` & `onChange={(e) => setText(e.target.value)}`: Establishes state as the single source of truth for the input element.

`src/App.jsx`
 `: Tracks active filter view (`"all"`, `"active"`, or `"completed"`).
  * `clearCompleted()`: Updates `todos` state with a filtered array of incomplete tasks (`!t.done`).
  * `todos={visible}`: Passes the derived subset to `<TodoList />` while preserving full task counts (`done`, `total`).