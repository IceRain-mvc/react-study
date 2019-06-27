import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import ZiXuan from "./views/ZiXuan";
import Add from "./views/Add";
import connect from "react-redux/es/connect/connect";
import mock from "./mock";
import Edit from "./views/Edit";
/*开关按钮*/
// import {Switch } from "antd";

class Day17 extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/zixuan" component={ZiXuan}/>
                    <Route path="/edit" component={Edit}/>
                    <Route path="/add" component={Add}/>
                    <Redirect from="/" to="/zixuan"/>
                </Switch>
            </Router>
        );
    }

    componentDidMount() {
        this.props.saveData(mock);
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

export default connect(initMapStateToProps,initMapDispatchToProps)(Day17);

// export default Day17;
