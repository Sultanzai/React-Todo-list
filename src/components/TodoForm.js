import React, { useState } from "react";

function TodoForm({addTodo}){
    const [input, setInput] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(input);
        setInput('');
    };

    return (
        // form for inputing the to-dos
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="todo-input"
                placeholder="Add a new Task..."
                aria-label="New Task"
            />
            <button type="submit" className="add-btn">Add</button>
        </form>
    );
}
export default TodoForm;