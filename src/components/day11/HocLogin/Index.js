import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import Me from "./Me";
import Detail from "./Detail";
import Login from "./Login";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/page" component={Page}/>
                    <Route path="/me" component={Me}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/login" component={Login}/>

                    <Redirect from="/" to="/home"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Index;
