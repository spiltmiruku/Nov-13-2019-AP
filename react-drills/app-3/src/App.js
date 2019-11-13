import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      addNew: '',
      pinkPokemon: ['jigglypuff', 'igglybuff', 'clefairy', 'cleffa', 'slurpuff']
    };
  }

handleChange(filter){
  this.setState({ addNew: filter })
}

  render() {
    let cutePokemon = this.state.pinkPokemon
    .filter((element, index) => {
      return element.includes(this.state.addNew);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return (
      <div className="App">
      <input
      onChange={e => this.handleChange(e.target.value)} 
      type="text"/>
      {cutePokemon}
      </div> );
  }
}

export default App;
