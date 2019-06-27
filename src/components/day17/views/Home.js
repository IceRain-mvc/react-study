import React, {Component} from 'react';
import Footer from "./components/Footer";
import mock from "../mock";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>首页</h1>
                <Footer/>
            </div>
        );
    }


}

let initMapStateToProps = (state) => {
    return {}
};
let initMapDispatchToProps = (dispatch) => {
    return {

        saveData: (data) => {
            dispatch({type: "ADD_ALL", data})
        }
    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);
