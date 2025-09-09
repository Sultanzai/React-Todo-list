import React, {useState, useEffect} from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function TodoApp(){
    const [todos, setTodos] = useState(()=>{
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text)=>{
        if(!text.trim()) return;
        const newTodo = {
            id:Date.now(), 
            text: text.trim(),
            completed: false
        };
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleTodo = (id)=>{
        setTodos(prev => prev.map(t=>(t.id === id ? {...t, completed: !t.completed}: t )));
    }

    const deleteTodo = (id)=> {
        setTodos(prev => prev.filter(t => t.id !== id));
    }
    
    return(
        // Main Page View
        <div className="todo-container">
            <h1 className="title">To DO LIST</h1>
            <TodoForm addTodo ={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            <div className="summary">
                <span>Total: {todos.length}</span>
                <span>Completed: {todos.filter(t=> t.completed).length} </span>
            </div>
        </div>
    );
}
export default TodoApp;