import React, {Component} from 'react';
import request from "./api/request";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.saveFuYinTv(request);
                }}>请求数据
                </button>


                <img src={this.props.obj.pic} alt=""/>
                <h1>{this.props.obj.title}</h1>
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        obj: state.reducerFuYin

    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveFuYinTv :(fn)=>{
            dispatch(fn);
        }

    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);
