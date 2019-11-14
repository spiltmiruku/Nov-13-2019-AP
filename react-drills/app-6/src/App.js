import React, { Component } from "react";
import "./App.css";

import Todo from './Todo';

class App extends Component {

  constructor(){
    super();

    this.state = {
      list: [],
      newItem: ''
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

handleChange(val){
  this.setState({ newItem: val });
}

handleAddTask() {
  this.setState({
    list: [...this.state.list, this.state.newItem],
    newItem: ''
  });
}

  render() {
    let list = this.state.list.map((el, ind) => {
    return <Todo key={ind} pizza={el} />;
    });

   
    return (
      <div className="App">
        <h1> Stuff to get done: </h1>

        <div>
        <input 
        value={this.state.newItem}
        placeholder="Add an activity here"
        onChange={ e => this.handleChange(e.target.value)} />
        
        <button onClick={this.handleAddTask}> Add </button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
