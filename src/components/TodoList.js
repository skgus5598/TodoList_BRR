import TodoItem from "./TodoItem";

const TodoList = ({todoList, setTodoList, checkedList}) => {

    return(
        <div className="todo-list-div">
            {
                checkedList
                ?   <span className="todo-complete-span"> COMPLETED LIST </span>
                :   <span className="todo-list-span"> TO-DO LIST </span>
            }
         
            {
                todoList.map((item) => {
                    if(checkedList !== item.checked){  //compare checkedList with each item
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