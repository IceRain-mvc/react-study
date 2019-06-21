import React, {Component} from 'react';
import Child from "./Child";
import Dialog from "./dialog/Dialog";

class TypeV extends Component {
    state = {
        num: "ahaha",
        str: 1,
        list: [],
        obj: {"password": "123455"},
        oDiv: <h1>aaaa</h1>,
        sex:"man",
        flag: false
    };

    cancel() {
        this.setState({
            flag:false
        })
    }

    yes() {
        this.setState({
            flag: false
        });
        alert("确定");
    }

    render() {
        return (
            <div>
                <Child {...this.state}/>

                <button onClick={()=>{
                    this.setState({
                        flag:true
                    })
                }}>弹框</button>

                {this.state.flag&&<Dialog flag={1} header={"头部"} content={"内容"} cancel={this.cancel.bind(this)}  yes={this.yes.bind(this)}/>}
            </div>
        );
    }
}

export default TypeV;
