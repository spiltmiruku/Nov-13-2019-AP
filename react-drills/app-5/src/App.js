import React, { Component } from "react";
import "./App.css";

import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Image url ={'https://i.pinimg.com/originals/64/a1/3d/64a13dd97aa84fff436f2b60e64211a4.gif'}/>
      </div>
    );
  }
}

export default App;