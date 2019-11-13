import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    
    this.state = {

      vscogirl: ['scrunchies', 'hydroflask', `'sksksksksksksksk'`, `'and I oop'`, 'birkenstocks', 'fjällräven känken'],
      };
    }

  render() {
    let essentialVsco = this.state.vscogirl.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return (
      <div className="App">
      {essentialVsco}
      </div>);
    }
}

export default App;
