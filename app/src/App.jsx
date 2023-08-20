import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>

      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-row">
          <label htmlFor="item">Add Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          <button id="btn">+</button>
        </div>
      </form>

      <div className="list-of-items">
        <h1>to-do list</h1>
        <ul>
          {todos.length === 0 && "no to-dos!"}
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  <p>{todo.title}</p>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-btn">delete</button>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

    </>
  );
}
