import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import RouterView from "./router/RouterView";

class Baby extends Component {
    render() {
        return (
            <Router>
                {/*
                    1:上面
                    2:下面

                */}
                {/*<RouterView />*/}

                <button onClick={()=>{

                }}>上传</button>
            </Router>
        );
    }
}

export default Baby;
