import React, {Component} from 'react';
import {connect} from "react-redux";

class Audio extends Component {
    render() {
        return (
            <div>
                <h1>音频</h1>
            </div>
        );
    }
}

let initMapStateToProps=(state)=>{
    return{

    }
}
let initMapDispatchToProps=(dispatch)=>{
    return{

    }
}

export default connect(initMapStateToProps,initMapDispatchToProps)(Audio);
