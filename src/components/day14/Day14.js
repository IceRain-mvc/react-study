import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from "react-router-dom";
import Add from "./Add";
import Look from "./Look";

class Day14 extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/add" component={Add}/>
                        <Route path="/look" component={Look}/>

                        <Redirect from="/" to="/add"/>
                    </Switch>
                    <NavLink to="/add">添加账单</NavLink>
                    <NavLink to="/look">查看账单</NavLink>
                </div>
            </BrowserRouter>
        );
    }
}

export default Day14;
