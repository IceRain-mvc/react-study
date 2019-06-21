import React, {Component} from 'react';

class VideoDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <video src={this.props.location.state} autoPlay controls/>
            </div>
        );
    }

    componentDidMount() {
        if (localStorage.getItem("name") && localStorage.getItem("pwd")) {

        } else {
            this.props.history.replace("/login");
        }
    }
}

export default VideoDetail;
