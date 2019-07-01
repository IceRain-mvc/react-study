import React, {Component} from 'react';

class Start extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.push("/answer",{index: 0});
                }}>开始</button>
            </div>
        );
    }
}

export default Start;
