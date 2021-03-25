import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
   const [todos, setTodos] = useState([]);


   const addTodo = todo =>{
       if(!todo.text || /^\s*$/.test(todo.text)){
           return
       }
       const newTodos = [todo, ...todos];

       setTodos(newTodos);
       
   }

   const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
   }


   const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo
    });
    setTodos(updatedTodos);
};
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removeArr);
    }
   




    return (
        <div>
        <h1>Twoje zadania !</h1>
        <TodoForm onSubmit={addTodo} /> 
        {todos.map(todo => (
            
           <Todo todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/> 
        ))}
               
        </div>
    )
}

export default TodoList;
