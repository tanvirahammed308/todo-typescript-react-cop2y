import React from 'react';
import { Todo } from './modal';
import SinglTodo from './SinglTodo';
import './style.css'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const DisplayTodos:React.FC<Props> = ({todos,setTodos}) => {
    return (
        <div className='todos-list'>
            {
                todos.map((todo)=>(
                    <SinglTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                ))
            }
            
        </div>
    );
};

export default DisplayTodos;