import React, {Component} from 'react';
import watcher from "../Watcher01";

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
    }


    /*
    * 订阅  watcher.sub...
    * */

    componentDidMount() {
        watcher.subscribe("son",this.handleMsg.bind(this));
    }

    handleMsg(msg) {
        this.setState({
            msg
        })
    }

    render() {
        return (
            <div>
                <h3>儿子收到了消息:{this.state.msg}</h3>
            </div>
        );
    }
}

export default Son;
