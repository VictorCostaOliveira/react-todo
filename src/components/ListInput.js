import React, { Component } from 'react';

class ListInput extends Component {
  render() {
    const { text, handleChange, setTodo } = this.props;
    return(
      <div>
        <label htmlFor="item">Adicionar ao todo</label><br/>
        <input name="item" id="item" type="text" onChange={handleChange} onKeyPress={setTodo} value={text}></input>
      </div>
    );
  };
}
export default ListInput;