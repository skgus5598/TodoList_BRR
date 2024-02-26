//import './App.css';
import { useState } from 'react';
import './css/custom.css';
import TodoList from './components/TodoList';

function App() {
  const [inputItem, setInputItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log("input Item : ", inputItem);
    //add to todoList
    setTodoList([...todoList, inputItem]);
    //empty input
    setInputItem('');

  }
  
  return (
    <main className='app'>
      <div className='inputForm'>
        <input type='text' placeholder='add todo list' value={inputItem} onChange={(e)=> setInputItem(e.target.value)} />
        <button onClick={addItem}>ADD</button>
      </div>
      
      <TodoList todoList={todoList} setTodoList={setTodoList} />


    </main>
   


  );
}

export default App;
