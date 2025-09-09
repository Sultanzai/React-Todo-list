import React from "react";

function TodoItem({todo, toggleTodo, deleteTodo}){
    return(
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="left">
                {/* Check box */}
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={()=>toggleTodo(todo.id)}
                />
                {/* Task Name */}
                <span className="text">{todo.text}</span>
            </label>
                {/* Delete Button */}
            <button className="delete" onClick={()=>deleteTodo(todo.id)}> Delete </button>
        </li>
    );
}
export default TodoItem;