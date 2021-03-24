import React from "react";


class Create extends React.Component {
    handleSaveTodo() {
        let text = this.todo.getValue();
        this.props.handleSaveTodo(text);
    }

    render() {
        return (
            <>
                <input name="todo"
                    type="text" 
                    id="my-input" 
                    placeholder="Title..."
                    ref={(e) => {this.todo = e;}}
                />
                <span class="add-btn" onClick={this.handleSaveTodo}>Add</span>
            </>
        )
    }
}

export default Create;