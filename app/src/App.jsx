import { useState } from "react";
import { TodoForm } from "./TodoForm";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
            id: crypto.randomUUID(),
            title,
            completed: false
        }
      ];
    });
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

      <TodoForm onSubmit={addTodo} />      

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
