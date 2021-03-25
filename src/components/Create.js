import React from "react";


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    handleSaveTodo() {
      this.props.handleSaveTodo(this.state.text);
      this.setState({
        text: '',
      })
    }
    handleClick(e) {
      this.setState({
        text: e.target.value
      })
    }

    render() {
        return (
            <div>
                <input
                    name="todo"
                    type="text"
                    id="my-input"
                    placeholder="Title..."
                    value={this.state.text}
                    onChange={e => {this.handleClick(e)}}
                />
                <span className="add-btn" onClick={() => { this.handleSaveTodo() }}>Add</span>
            </div>
        )
    }
}

export default Create;
