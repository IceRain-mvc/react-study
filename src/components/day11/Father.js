import React, {Component} from 'react';
import Home from "./Home";

class Father extends Component {

    state = {
        name: "北斗神拳"
    };
    render() {
        return (
            <div>
                <Home name={this.state.name}/>
            </div>
        );
    }
}

export default Father;
