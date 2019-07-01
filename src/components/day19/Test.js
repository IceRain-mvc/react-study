import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Start from "./views/Start";
import Answer from "./views/Answer";
import Card from "./views/Card";
import Result from "./views/Result";
import {connect} from "react-redux";
import request from "./api/request";

class Test extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/start" component={Start}/>
                        <Route path="/answer" component={Answer}/>
                        <Route path="/card" component={Card}/>
                        <Route path="/result" component={Result}/>
                        <Redirect from="/" to="/start"/>
                    </Switch>

                </div>

            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.props.saveAllData(request("http://192.168.11.2:3000/result"))
    }
}


let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData:(fn)=>{
            dispatch(fn)
        }

    };
};
export default connect((state)=>{return{}},initMapDispatchToProps)(Test);
