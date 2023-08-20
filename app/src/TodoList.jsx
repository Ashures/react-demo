import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <div className="list-of-items">
            <h1>to-do list</h1>
            <ul>
            {todos.length === 0 && "no to-dos!"}
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                );
            })}
            </ul>
        </div>
    );
    
}