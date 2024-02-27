//import './App.css';
import { useEffect, useState } from 'react';
import './assets/css/custom.css';
import TodoList from './components/TodoList';
import uuid from 'react-uuid'; //npm install react-uuid


function App() {
  const [inputItem, setInputItem] = useState('');
  const [todoList, setTodoList] = useState(
                                    localStorage.getItem("todoList")
                                    ? JSON.parse(localStorage.getItem("todoList"))
                                    : []
                                  );


  /* todolist change -> localstorage  */
  useEffect(()=>{
     localStorage.setItem("todoList", JSON.stringify(todoList));   
  }, [todoList])

  const addItem = () => {
    // id, text, checked
    const newTodoItem = {
      id : uuid(), // unique id
      text : inputItem,
      checked : false
    }
    //add to todoList
    setTodoList([...todoList, newTodoItem]);
    //empty input
    setInputItem('');
  }
 
  
  return (
    <main className='app'>
      <div className='inputForm'>
        <input type='text' 
               placeholder='add todo list' 
               maxLength={50} 
               value={inputItem} 
               onChange={(e)=> setInputItem(e.target.value)} 
               onKeyDown={(e) => { if(e.key === "Enter") addItem() }} 
        />
        <button onClick={addItem}>ADD</button>
      </div>
      
      <div className="todo-list" >
        {/* to-do item list */}
        <TodoList todoList={todoList} setTodoList={setTodoList} checkedList={false} />

        {/* completed item list */}
        <TodoList todoList={todoList} setTodoList={setTodoList} checkedList={true} />
      </div>
    </main>
   


  );
}

export default App;
