import React, {useState} from 'react';
import {RiEditBoxLine} from 'react-icons/ri';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {RiCheckboxCircleLine} from 'react-icons/ri';
import TodoForm from './TodoForm';

function Todo({todo, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    };

    
        return (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>

                <div key={todo.id} onClick={() =>completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCheckboxCircleLine />
                    <RiEditBoxLine
                        onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        className='edit-icon' />
                    <RiDeleteBin5Fill
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon' />
                </div>
            </div>
        );
    
}

export default Todo
