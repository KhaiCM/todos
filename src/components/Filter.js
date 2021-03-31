import React from "react";
import "./List.css";
import { Row, Col, Radio } from "antd";

const Filter = ({ onClick }) => (
  <div>
    <div className="radio-checkbox">
      <div className="todo_checkbox">
        <Row
        style={{
          margin: '24px 0px 0px 0px',
        }} 
        >
          <Col span={24}>
            <label className="radio-inline">
              <Radio
                type="radio"
                onClick={(_) => onClick("ALL")}
                name="optradio"
                defaultChecked="true"
              />
              ALL
            </label>
            <label className="radio-inline">
              <Radio
                type="radio"
                onClick={(_) => onClick("COMPLETED")}
                name="optradio"
              />
              COMPLETED
            </label>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default Filter;
