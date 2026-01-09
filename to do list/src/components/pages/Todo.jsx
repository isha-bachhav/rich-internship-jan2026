import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // 🆕 Edit states
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // ➕ Add Todo
  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // ✔️ Strike-through toggle
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✏️ Start editing
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // 💾 Save edited todo
  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
    setEditText("");
  };

  // ❌ Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">My Todo List</h2>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.length === 0 && (
            <li className="text-center text-gray-400">No tasks added yet</li>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg"
            >
              {/* ✏️ Edit Mode */}
              {editId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 mr-2 px-2 py-1 border rounded"
                />
              ) : (
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer flex-1 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
              )}

              {/* Buttons */}
              <div className="flex gap-2 ml-3">
                {editId === todo.id ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-600 font-bold"
                  >
                    ✓
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-blue-500 font-bold"
                  >
                    ✎
                  </button>
                )}

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
