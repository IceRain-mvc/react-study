import React, {Component} from 'react';
import "./Show.css"

class Show extends Component {

    render() {
        let {msg} = this.props;
        return (
            <div className="show">
                {msg}
            </div>
        );
    }
}

export default Show;
