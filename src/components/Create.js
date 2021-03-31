import React from "react";
import { Row, Col, Input, Button } from "antd";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSaveTodo() {
    this.props.handleSaveTodo(this.state.text);
    this.setState({
      text: "",
    });
  }
  handleClick(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={20}>
            <Input
              name="todo"
              type="text"
              id="my-input"
              placeholder="Enter todo you want..."
              value={this.state.text}
              onChange={(e) => {
                this.handleClick(e);
              }}
            />
          </Col>
          <Col span={4}>
            <Button
              className="add-btn"
              htmlType="submit"
              type="primary"
              onClick={() => {
                this.handleSaveTodo();
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Create;
