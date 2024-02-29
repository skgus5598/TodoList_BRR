import { useEffect, useRef, useState } from 'react';
import './assets/css/custom.css';
import TodoList from './components/TodoList';
import uuid from 'react-uuid';

function App() {
  const [inputItem, setInputItem] = useState('');
  const [todoList, setTodoList] = useState(
                                    localStorage.getItem("todoList")
                                    ? JSON.parse(localStorage.getItem("todoList"))
                                    : []
                                  );
  const [cntComplete, setCntComplete] = useState(todoList.filter(item => item.checked).length);
  const [compToggle, setCompToggle] = useState(false); /* All complete event toggle  */

  useEffect(()=>{   /* todolist change -> localstorage  */
     localStorage.setItem("todoList", JSON.stringify(todoList));   
     setCntComplete(todoList.filter(item => item.checked).length);
     /* All complete event  */
     if(todoList.length > 0 && todoList.filter(item => !item.checked).length === 0 ){
        setCompToggle(true);
        setTimeout(() => {
            setCompToggle(false);
        }, 500);
     }
  }, [todoList])

  const addItem = () => {
    if(!inputItem.trim()){   /* check if it's empty value */
      alert("Please type your todo");
      return;
    }
    const newTodoItem = {
      id : uuid(), /* unique id */
      text : inputItem,
      checked : false
    }  
    setTodoList([...todoList, newTodoItem]);  /* add to todoList */
    setInputItem('');    /* empty input */
  }

  const clearList = (type) => {
    if(type === 'done'){
      setTodoList(todoList.filter(item => !item.checked))
    }else{
      setTodoList([]);
    }
  }
 
  
  return (
    <main className='app'>
      <header>TODO LIST</header>
      <div className='inputForm'>
        <input type='text' 
               placeholder='type here ....' 
               maxLength={30} 
               value={inputItem} 
               onChange={(e)=> setInputItem(e.target.value)} 
               onKeyDown={(e) => { if(e.key === "Enter") addItem() }} 
        />
        <button onClick={addItem}>ADD</button>
      </div>
      <div className='todo-score'>
      {
        compToggle  /* add className for css */
        ?<div className='todo-score-complete'><b>🔥 <u>{cntComplete}</u> &#47; <u>{todoList.length}</u> COMPLETED 🔥</b></div>
        :<div><b>🔥 <u>{cntComplete}</u> &#47; <u>{todoList.length}</u> COMPLETED 🔥</b></div>
      }
      </div>  
      
      <div className="todo-list" >
        <TodoList todoList={todoList} setTodoList={setTodoList} checkedList={false} /> {/* to-do item list */}
        <TodoList todoList={todoList} setTodoList={setTodoList} checkedList={true} /> {/* completed item list */}
      </div>

      <div className='clearBtn'>
        <button onClick={() => clearList('all')}>CLEAR ALL</button>
        <button onClick={() => clearList('done')}>CLEAR DONE</button>
      </div>   
    </main>
  );
}

export default App;
