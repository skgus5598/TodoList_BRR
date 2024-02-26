import TodoItem from "./TodoItem";

const TodoList = ({todoList, setTodoList}) => {

    return(
        <>
        <h1>Todo List</h1>
        <div >
            {
                todoList.map((item, i) =>
                    <TodoItem key={i} 
                              item = {item} 
                              id={i} 
                              todoList={todoList} 
                              setTodoList = {setTodoList}/>)
            }
        </div>
        </>
    )
}

export default TodoList;