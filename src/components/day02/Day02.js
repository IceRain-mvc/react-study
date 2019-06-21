import React, {Component} from 'react';
import Child from "./Child";

class Day02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: ""
        }
    }

    receiver(msg) {
        //接收子组件传过来的值
        this.setState({
            child:msg
        })
    }

    render() {
        return (
            <div>
                <hr/>
                <Child onHandleChild={this.receiver.bind(this)}/>
                <hr/>
                <h2>{this.state.child}</h2>

            </div>
        );
    }
}

export default Day02;
