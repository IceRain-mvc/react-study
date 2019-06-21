import React, {Component} from 'react';
import Show from "./Show";
import Plane from "./Plane";
import calculate from './script/calculate';

let newMsg = "";

/*
* 123 * 321 = 121
*
* big.js += log sin cos tan
* 1:npm i big
* 2:3个文件 引入到项目中 {next  total 计算}
* 3:this.state = {}
*
* */

class JiSuanQi extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     msg: ""
        // }

        this.state = {
            total: null,
            next: null,
            operation: null
        }
    }


    // 123 * 321 =
    clickItem(msg) {
        this.setState(calculate(this.state, msg));

    }

    render() {
        return (
            <div>
                <Show msg={this.state.next || this.state.total || 0}/>
                <Plane clickItem={this.clickItem.bind(this)}/>
            </div>
        );
    }
}

export default JiSuanQi;
