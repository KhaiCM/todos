import React from "react";
import "./List.css";
import { Row, Col, Input, Button, Typography, Divider } from "antd";

const List = ({ todoList, filter, changeStatus, removeItem }) => {
  if (filter === "COMPLETED") {
    todoList = todoList.filter((todo) => todo.completed);
  }

  return (
    <div>
      <ul id="my-ul">
        {todoList.map((todo, index) => (
          <li value={index} key={index}>
            <Row
            style={{
              margin: '0px 0px 10px 0px',
            }}
            >
              <Col span={20}>{todo.name}</Col>
              <Col span={2}>
                <button className="list" onClick={() => removeItem(index)}>
                  Delete
                </button>
              </Col>
              <Col span={2}>
                <button className="list" onClick={() => changeStatus(index)}>
                  Complete
                </button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
