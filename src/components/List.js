import React, { Component } from 'react';
import ListItem from './ListItem';
import ListInput from './ListInput';

class List extends Component {
  // constructor() {
    // super();
    // this.state = {
      // todos: [],
      // text: "",
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.setTodo = this.setTodo.bind(this);
  // };

  state = {
    todos: [],
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  };

  setTodo = (event) => {
    if (event.key === 'Enter' && event.target.value !== "") {
      const todos = this.state.todos;
      const newTodo = { id: this.setId(todos), text: event.target.value, completed: false };
      
      todos.push(newTodo);

      this.setState({todos: todos });
      this.setState({text: '' });
    }
  };

  setId = (todos) => {
    if (todos.length === 0) {
      return 1;
    } else {
      return todos[todos.length - 1].id + 1;
    }
  };

  handleClick = (todoId) => {
    const allTodos = this.state.todos;
    const todoToComplete = allTodos.find(todo => todo.id === todoId);
    todoToComplete.completed = true;
    allTodos.splice(allTodos.indexOf(todoToComplete), 1, todoToComplete);
    this.setState({ todos: allTodos });
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed);
    const todosToComplete = todos.filter(todo => !todo.completed);

    return (
      <div>
        <div className="list-container">
          <h1 className="list-header">Lista</h1>
          <div className="list-form">
            <ListInput text={this.state.text} handleChange={this.handleChange} setTodo={this.setTodo}>
              
            </ListInput>
            {todosToComplete.length > 0 && 
              <p>Tarefas A completar</p>
            }
            <ListItem todos={todosToComplete} handleClick={this.handleClick}/>
            {completedTodos.length > 0 && 
              <p>Tarefas Feitos</p>
            }
            <ListItem todos={completedTodos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    )
  }
}

export default List;
