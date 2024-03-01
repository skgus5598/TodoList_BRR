import TodoItem from "./TodoItem";
import completeIcon from "../assets/images/trumpet.png";
import todoIcon from "../assets/images/todo.png";
import noItemIcon from "../assets/images/noItem.png";


const TodoList = ({todoList, setTodoList, checkedList}) => {

    return(
        <div className="todo-list-div">
            {
                checkedList
                ?   <div className="todo-list-name">
                        <span className="todo-complete-span"> COMPLETED LIST&nbsp;</span>
                        <img src={completeIcon} /> 
                    </div>
                :   <div className="todo-list-name">
                        <span className="todo-list-span"> TO-DO LIST&nbsp;</span>
                        <img src={todoIcon} /> 
                    </div>
            }
            {
                todoList.length === 0    /* check if the todoList is empty */
                ? <div className="todo-list-none-frame">
                     {/* <img src={noItemIcon} /> */}
                     No Item
                  </div>
                : todoList.map((item) => {
                    if(checkedList !== item.checked){  /* compare checkedList value with each item */
                        return null;
                    }else{
                        return(
                                <TodoItem key={item.id} 
                                item = {item}
                                todoList={todoList} 
                                setTodoList = {setTodoList}/>
                        )
                    }
                })    
            } 
        </div>
    )
}

export default TodoList;