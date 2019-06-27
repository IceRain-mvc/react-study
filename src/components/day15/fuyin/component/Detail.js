import React, {Component} from 'react';
import "./detail.css";
import {connect} from "react-redux";
import {requestDetail} from "../../api/request";

class Detail extends Component {
    state = {
        res: ""
    };
    render() {
        return (
            <div className="detail">
                {this.props.item && <h1>{this.props.item.title}</h1>}
                {/*音频还是视频*/}
                {this.props.item && <h1>{this.props.item.key}</h1>}

                {this.state.res&&<video style={{height:"200px"}} src={this.state.res.url_1} autoPlay controls/>}
            </div>
        );
    }

    fn(res) {
        // console.log(res);
        this.setState({
            res:res
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props.item.urlid);
        // console.log(this.props);

        if (nextProps !== this.props) {
            requestDetail(nextProps.item.urlid, this.fn.bind(this));

        }
        return true;


    }
}

let initMapStateToProps = (state) => {
    return {
        item: state.reducerItem
    }
};


export default connect(initMapStateToProps)(Detail);

