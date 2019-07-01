import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CreateClass from "./views/CreateClass";
import ClassDetail from "./views/ClassDetail";
import AddStudent from "./views/AddStudent";
import StudentDetail from "./views/StudentDetail";
import ClassManager from "./views/ClassManager";

class ClassRoom extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Switch>
                        <Route path="/create" component={CreateClass}/>
                        <Route path="/classdetail" component={ClassDetail}/>
                        <Route path="/addstudent" component={AddStudent}/>
                        <Route path="/studentdetail" component={StudentDetail}/>
                        <Route path="/classmanager" component={ClassManager}/>

                        <Redirect from="/" to="/create"/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default ClassRoom;
