import React, {Component} from 'react';
import watcher from "../Watcher01";

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
    }


    /*
    * 1:发布者
    * */

    render() {
        return (
            <div>
                <button onClick={() => {
                    watcher.publish("father","汪汪");
                }}>饿了
                </button>

                <h3>狗狗收到了:{this.state.msg}</h3>
            </div>
        );
    }

    /*
    * 2:订阅者
    *
    * 狗-->die 他爹
    *
    * gou
    * */

    componentDidMount() {
        watcher.subscribe("dog",this.receiver.bind(this));
    }

    receiver(msg) {
        this.setState({
            msg
        })
    }
}

export default Dog;
