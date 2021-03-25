import React from "react";
import './List.css';

const List = ({todoList, filter, changeStatus, removeItem}) => {
  if (filter === 'COMPLETED') {
    todoList = todoList.filter(todo => todo.completed);
  }

  return (
    (
      <div>
        <ul id="my-ul">
          {todoList.map((todo, index) =>
            <li value={index} key={index}>
              {todo.name}
              <button className="list" onClick={() => removeItem(index) }>
                Delete
              </button>
              <button className="list" onClick={() => changeStatus(index) }>
                Complete
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  );
}

export default List;
