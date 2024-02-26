import { useState } from "react";


const TodoItem = ( {item, id, todoList, setTodoList} ) => {
    const [text, setText] = useState(item);
    const [editToggle, setEditToggle] = useState(false);

    const editItemBtn = (id) => {
        const editTodoList = todoList.map((item, idx) => 
            idx === id ? text : item
        );
        setTodoList(editTodoList);
        setEditToggle(!editToggle); 
    }
    const handleDelete = (id) => {  
        if(editToggle){
            setEditToggle(!editToggle);
        }
        setTodoList(todoList.filter((item, idx) => idx !== id ));

        
    }
   
    return(
        <div className="todo-item">
            <ul>
                <li>
                    <label>
                        <input type="checkbox"/>
                        {
                            editToggle 
                            ? 
                            <>
                                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} ></input>
                                <button onClick={()=>{ editItemBtn(id)}}>save</button>
                            </>
                            :<>
                                <span>{item}</span>
                                <button onClick={()=>{ setText(item); setEditToggle(!editToggle)}}>edit</button>
                            </>
                        }
                    </label>             
                    <button onClick={() => {handleDelete(id)}}>remove</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoItem;