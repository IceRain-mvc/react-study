import React, {Component} from 'react';
import {connect} from "react-redux";
import request from "./api/request";

class Add extends Component {

    state = {
        bill: "",
        type: "",

    };

    render() {
        let {type, bill} = this.state;
        return (
            <div>

                <h1>添加</h1>
                <input type="number" value={bill} onChange={(e) => {
                    this.setState({bill: e.target.value})
                }}/>


                <select value={type} onChange={(e) => {
                    this.setState({type: e.target.value})
                }}>
                    <option value="请选择">--请选择--</option>
                    <option value="收入">收入</option>
                    <option value="支出">支出</option>
                </select>

                <button onClick={this.save.bind(this)}>保存</button>
                <button onClick={this.requestData.bind(this)}>保存异步数据</button>

            </div>
        );
    }

    requestData() {
        //request();
        this.props.saveAsync(request)

    }

    save() {
        let {type, bill} = this.state;

        let obj = {
            bill,
            type
        };
        this.props.save(obj);
    }
}

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        save: (obj) => {
            dispatch({type: "ADD", obj});
        },
        saveAsync: (fn) => {
            dispatch(fn);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
