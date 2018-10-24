import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        <ul className="todos-list">
          {todos.map(todo => (
            <li className="todo-item" key={todo.id}>
              <span>{ todo.text }</span>
              {!todo.completed && <button onClick={() => this.props.handleClick(todo.id)} > Completar </button>}
            </li>
          ))}
        </ul>
      </div>
      
    );
  };
}

export default ListItem;