import React, {Component} from 'react';
import watcher from "../Watcher01";

class Dog2 extends Component {
    state = {
        msg: ""
    };

    componentDidMount(){
        watcher.subscribe("dog",this.receiver.bind(this))
    }

    receiver(msg) {
        this.setState({
            msg
        })

    }

    render() {
        return (
            <div>
                <h4>狗2:{this.state.msg}</h4>

            </div>
        );
    }
}

export default Dog2;
