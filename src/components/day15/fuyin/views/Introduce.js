import React, {Component} from 'react';
import {connect} from "react-redux";

class Introduce extends Component {
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.content}} />
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        content: state.reducerFuYin.content
    }
};

export default connect(initMapStateToProps)(Introduce);
