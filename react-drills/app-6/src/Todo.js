import React, { Component } from 'react';
import App from './App';

class Todo extends Component{

    render(){
        return(
            <div>{this.props.pizza}</div>
        )
    }
}

export default Todo;