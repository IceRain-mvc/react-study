import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Path from "./path";


/*
* 无状态组件 函数  可以直接得到路由对象
* */

// function Pathh(props) {
//
// }


class Day10 extends Component {
    render() {
        return (
            <Router>

                <Link to="/path">跳转</Link>

                <Switch>
                    <Route path="/path" render={(props)=>{
                        return <Path {...props}/>;
                    }}/>
                </Switch>
            </Router>
        );
    }
}

export default Day10;
