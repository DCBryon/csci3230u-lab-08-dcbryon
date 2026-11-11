# Lab 08 - React: forms & derived state

The second React lab, building on your Lab 07 to-do app:

| Lab | You add | Topic |
|-----|---------|-------|
| 07 | components + state | components, props, state, events |
| 08 | a controlled form + filters | controlled inputs, derived state |
| 09 | a `useTodos` hook + routing | state management, React Router |
| 11 | loading from a server | effects, fetching, async |

Two small features this week - a controlled add-input and All / Active / Completed filters. They're deliberately mechanical, because this is the first lab where you may use an AI agent to generate code. The real skill being graded is directing and reviewing that agent: documenting it, catching what it gets wrong, and being able to explain every line of code that you submit.

## Getting your copy of the starter repo

The starter for this lab is a **template repository** on GitHub (the link is on Canvas). Make your own copy of it - work in *your* copy, never in the template:

1. Open the template repo and click **Use this template → Create a new repository**.
2. Name it `csci3230u-lab-08-<your-github-username>`, set the visibility to **Private**, and create it.
3. Add your **lab instructor (TA)** and the **course instructor** as collaborators (**Settings → Collaborators and teams → Add people**) - your work cannot be marked if they cannot see it.
4. Clone your new copy and work there:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-dir>
   ```

## Continue from your Lab 07 solution

Copy your Lab 07 components into `src/`:

- `src/App.jsx`, `src/TodoList.jsx`, `src/TodoItem.jsx`, `src/AddTodoForm.jsx`

This starter provides the rest: the Vite/React scaffold, an updated `src/index.css` (filter-bar styles included), the test suite (`src/App.test.jsx` - now 8 tests), and `AI-USAGE.md`.

```bash
npm install
npm run dev      # play with it
npm test         # 8 tests - your Lab 07 5 still pass; 3 new ones are red
```

## Requirements

1. **Make the add-input a controlled component** (`src/AddTodoForm.jsx`). React state is the source of truth for the field:

   ```jsx
   const [text, setText] = useState("");
   // <input value={text} onChange={(e) => setText(e.target.value)} … />
   // on submit: onAdd(text.trim()), then setText("")
   ```

2. **Add filters: All / Active / Completed** (`src/App.jsx`). Hold the current filter in state; the list you render is derived from `todos` + `filter` - don't store a second list:

   ```jsx
   const [filter, setFilter] = useState("all");
   const visible = todos.filter((t) =>
     filter === "active" ? !t.done : filter === "completed" ? t.done : true,
   );
   // render three buttons (All/Active/Completed) that setFilter; pass `visible` to <TodoList>
   ```

   *(Stretch: a "Clear completed" button, or edit-in-place.)*

## The AI rules

- **You may use an AI agent to generate the code** above, but you must use free models only (for fairness)
- **Document every use** in `AI-USAGE.md` - the verbatim prompt, the files, and what you kept / changed / rejected. Add it before you commit that code, with a `// AI-assisted - see AI-USAGE.md #N` marker where it lives
- **Reflect:** what did the agent get wrong or do awkwardly? (in `AI-USAGE.md`)
- **Own every line.** You may be asked to explain any line the agent wrote. If you can't explain it, don't submit it

> Recommended workflow going forward: try it yourself first, delegate the tedium, then review and verify - never paste code you don't understand.

## Quality bar (this is graded)

- **All 8 tests pass** (`npm test`)
- The add-input is **controlled** (`value` + `onChange`), and clears via state after adding
- The filtered list is **derived** (computed from `todos`), not stored in its own `useState`
- **`AI-USAGE.md` is complete** - every AI use logged with its verbatim prompt - and the reflection is filled in

## How you're graded

- **Automated:** `npm test` - all 8.
- **By rubric:** controlled input + derived filters (done the React way, not faked)
- **AI documentation:** complete `AI-USAGE.md` + reflection; and you can explain your code on request

## How to submit

Commit and push to `origin` (`.gitignore` keeps `node_modules/` out). The graded state is whatever is on `main`.

However, since lab marks do sometimes go missing, I would encourage everyone to submit the URL of their repository to Canvas as the submission for this lab assignment (and for all other labs).  If there are any lab mark discrepancies, at least we have your submission to re-mark it.
