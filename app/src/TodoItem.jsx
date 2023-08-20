export function TodoItem({id, title, completed, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
            <input
                type="checkbox" 
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} 
            />
            <p>{title}</p>
            <button
                onClick={() => deleteTodo(id)} 
                className="delete-btn"
            >
                delete
            </button>
            </label>
        </li>
    );
    
}