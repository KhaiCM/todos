import React from "react";
import './List.css';

const List = ({todoList}) => (
    <>
        <ul id="my-ul">
            {todoList.map(todo =>
                <li value={todo.id}> {todo.name}
                <button class="list">
                    Click me
                </button>
                </li>

        )}
        </ul>
    </>
)


export default List;