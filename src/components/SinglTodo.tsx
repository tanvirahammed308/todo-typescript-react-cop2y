import React, { useState } from 'react';
import { Todo } from './modal';
import { AiFillEdit,AiTwotoneDelete,AiOutlineFileDone } from 'react-icons/ai';
import "./style.css"

type Props={
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SinglTodo = ({todo,todos,setTodos}:Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState(todo.todo);
const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>todo.id ===id?{...todo,todo:editTodo}:todo));
    setEdit(false)
}

   
    return (
        <form className='single-todos-form'>
            <span className='single-todo-text'>
                {
                    todo.todo
                }
            </span>
            <div>
                <span className='icon'>
<AiFillEdit/>
                </span>
                <span className='icon'>
                    <AiTwotoneDelete/>
                </span>
                <span className='icon'>
                    <AiOutlineFileDone/>
                </span>
            </div>
            
            

        </form>
//         <form onSubmit={(e)=>handleEdit(e,todo.id)} className='single-todos-form'>
            
//             {
//                 edit ? (
//                     <input type="input" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='edit-todo-field'/>
//                 ): todo.isDone?(
//                     <s>
//                         {todo.todo}
//                     </s>
//                 ):(
//                     <span>
//                     {
//                         todo.todo
//                     }
//                     </span>
//                 )
//             }
//             <div>
//                 <span>
// <AiFillEdit/>
//                 </span>
//                 <span>
//                     <AiTwotoneDelete/>
//                 </span>
//                 <span>
//                     <AiOutlineFileDone/>
//                 </span>
//             </div>
//         </form>
    );
};

export default SinglTodo;