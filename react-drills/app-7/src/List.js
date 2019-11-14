import React, { Component } from 'react';

import Todo from './Todo';

class List extends Component {

    render(){
        let list = this.props.tasks.map((el, ind) => {
            return <Todo key={ind} task={el} />;
        });
        return(
            <div>
            {list}
            </div>);
    }
}
export default List;