import React, { Component } from "react";
import _map from 'lodash/map';
import List from "./List"
import Create from "./Create"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {id: 1, name: 'test1', completed: true},
                {id: 2, name: 'test2', completed: true},
                {id: 3, name: 'test3', completed: false},
                {id: 4, name: 'test4', completed: true},
                {id: 5, name: 'test5', completed: false},
                {id: 6, name: 'test6', completed: true},
                {id: 7, name: 'test7', completed: true},
            ],
        }
    }
    handleAddTodo(text) {
        const todos = this.state.todoList;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        todos.push({
            id: max+1,
            name: text,
            completed: false,
        });
        
        this.setState({todos});
    }

    countTodoCompleted() {
        let todoList = this.state.todoList;
        return todoList.filter(todo => todo.completed).length;
    }
    render () {
        return (
            <div>
                <div id="my-div" class="header">
                    <h2>Have {this.countTodoCompleted() } todo list</h2>
                    <Create handleSaveTodo={this.handleAddTodo} />
                    
                </div>
                <List todoList={this.state.todoList}/>

                <div class="radio-checkbox">
                    <label class="checkbox-inline" /><input type="checkbox" value="" />Option 1
                    <label class="checkbox-inline" /><input type="checkbox" value=""/>Option 2
                    <label class="checkbox-inline" /><input type="checkbox" value=""/>Option 3
                </div>
            </div>
        )

    }
}

export default Todo;
