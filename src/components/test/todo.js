
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addItem,
    selectTodoList
 } from "./todoSlice";

export function Todo() {
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [incrementAmount, setIncrementAmount] = useState();

  return (
    <div>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input ref={inputRef} type="text" placeholder="Title..." />
        <button onClick={()=> dispatch(addItem(inputRef.current.value))} >
            add
        </button>
      </div>

      <ul id="myUL">
        {todos.map((todo, index) => (
          <li value={index} key={index}>
            {todo.name}
            <button className="list">Delete</button>
            <button className="list">Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
