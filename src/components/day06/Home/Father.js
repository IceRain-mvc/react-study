import React, {Component} from 'react';
import watcher from "../Watcher01";

class Father extends Component {

    /*订阅*/
    componentDidMount() {
        watcher.subscribe("father",this.receiver.bind(this));
    }

    receiver(msg) {
        console.log(msg);
        /*
        * 发布者
        * */
        watcher.publish("dog", "香肠");
    }

    render() {
        return (
            <div>
                <h3>父亲组件</h3>
                <button onClick={()=>{
                    /*
                    * 发布
                    * */
                    watcher.publish("son", "儿子 饭好了 下来密西吧");
                }}>通知</button>

            </div>
        );
    }
}

export default Father;
