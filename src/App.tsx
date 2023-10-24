

import TypewriterComponent from 'typewriter-effect';
import './App.css';
import InputForm from './components/InputForm';
import { FaBookReader } from 'react-icons/fa';
import { useState } from 'react';
import { Todo } from './components/modal';
import DisplayTodos from './components/DisplayTodos';

const App:React.FC=()=> {
 const [todo, setTodo] = useState<string>('');
//  console.log(todo)
const [todos, setTodos] = useState<Todo[]>([]);
const handleAdd=(e: React.FormEvent )=>{
  e.preventDefault();
  if (todo) {
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo("")
    
  }
  console.log(todos)

}



  return (
    <div className="App">
      
      <span className="heading">
      <FaBookReader className='header-icon' />
        <TypewriterComponent
          options={{
            strings: ['remind it'],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <DisplayTodos todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
