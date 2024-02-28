import { useState } from "react";
import deleteIcon from "../assets/images/bin.png";
import editIcon from "../assets/images/compose.png";
import saveIcon from "../assets/images/check.png";

const TodoItem = ({ item, todoList, setTodoList }) => {
  const [text, setText] = useState(item.text);
  const [editToggle, setEditToggle] = useState(false);

  /* Edit todo */
  const handleUpdate = (id) => {
    const editTodoList = todoList.map((item) =>
      item.id === id ? { ...item, text: text } : item
    );
    setTodoList(editTodoList);
    setEditToggle(false);
  };

  /* Remove todo */
  const handleDelete = (id) => {
    if (editToggle){ setEditToggle(false) };
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  /* Checkbox todo -> complete */
  const handleCheckBox = (id) => {
    const updateTodoList = todoList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodoList(updateTodoList);
  };

  /* Toggle edit mode */
  const toggleEdit = () => {
    setText(item.text);
    setEditToggle(!editToggle);
  };

  return (
    <div className="todo-item">
      <ul>
        <li>
          <div>
            <input
              type="checkbox"
              className="todo-item-checkbox"
              checked={item.checked}
              onChange={(e) => handleCheckBox(item.id)}
            />
            { editToggle 
                ? <input type="text" value={text} maxLength={20} onChange={(e) => setText(e.target.value)} />
                : <label className={item.checked ? "todo-item-checked" : ""}>{item.text}</label>
            }
          </div>
          <div>
            {editToggle
                ? <img src={saveIcon} alt="save" onClick={() => handleUpdate(item.id)} /> 
                : <img src={editIcon} alt="edit" onClick={toggleEdit} />
            }
            <img src={deleteIcon} alt="remove" onClick={() => handleDelete(item.id)} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
