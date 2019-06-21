import React, {Component} from 'react';
import Home from "./Home";
import Detail from "./Detail";
// import Receiver from "./Receiver";
// import Send from "./Send";

class ReduxHome extends Component {
    render() {
        return (
            <div>
                {/*<Receiver/>*/}
                {/*<hr/>*/}
                {/*<Send/>*/}
                <Home/>
                <hr/>
                <Detail></Detail>

            </div>
        );
    }
}

export default ReduxHome;
