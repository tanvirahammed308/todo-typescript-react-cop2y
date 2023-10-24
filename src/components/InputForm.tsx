import React, { useRef } from 'react';
import './style.css'

interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}
const InputForm = ({todo,setTodo,handleAdd}:Props) => {
  const inputRef=useRef<HTMLInputElement>(null)
    return (
        <form className='input-form' onSubmit={(e)=>{
          inputRef.current?.blur()
          handleAdd(e)
        }}>
          <input type="input" placeholder='enter your note here' className='input-field' value={todo} onChange={(e)=>setTodo(e.target.value)}
          
          ref={inputRef}
          />
          <button type="submit" className='btn-go'>Go</button>
        </form>
    );
};

export default InputForm;