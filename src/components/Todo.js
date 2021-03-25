import React, { Component } from "react";
import List from "./List"
import Create from "./Create"
import Filter from "./Filter"

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
            ],
          filter: 'ALL'
        }
      this.removeItem = this.removeItem.bind(this);
      this.changeStatus = this.changeStatus.bind(this);
      this.filter = this.filter.bind(this);
    }
    handleAddTodo(text) {
        const todos = this.state.todoList;
        todos.push({
            name: text,
            completed: false,
        });

        this.setState({
          todoList: todos,
        });
    }

    removeItem(index) {
        let newTodos = this.state.todoList.filter((item, i) => i !== index);
        this.setState({
          todoList: newTodos
        });
    }

    changeStatus(index) {
      const todos = this.state.todoList;
        let todo = todos[index];
        todo.completed = !todo.completed;
        todos[index] = todo;
        this.setState({todos});
    }

    filter(value) {
      this.setState({
        filter: value
      })
    }

    countTodoCompleted() {
        let todoList = this.state.todoList;
        return todoList.filter(todo => todo.completed).length;
    }
    render () {
      return (
        <div>
          <div id="my-div" className="header">
            <h2>Have {this.countTodoCompleted()} todo list</h2>
            <Create handleSaveTodo={text => {this.handleAddTodo(text)}} />
          </div>
          <Filter onClick={value => this.filter(value)} />

          <List todoList={this.state.todoList} filter={this.state.filter} changeStatus={this.changeStatus} removeItem={this.removeItem}/>
        </div>
      )
    }
}

export default Todo;
