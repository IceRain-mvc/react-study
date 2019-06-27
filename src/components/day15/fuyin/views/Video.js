import React, {Component} from 'react';
import {connect} from "react-redux";
import "./video.css";
import {ADD_ITEM} from "../../store/action/action";

class Video extends Component {
    render() {
        return (
            <div className="videoContainer">
                {
                    this.props.videoList&&this.props.videoList.map((item,index)=>{
                        return <span onClick={this.play.bind(this,item)} key={item.urlid}>{item.sort_title}</span>;

                    })
                }
            </div>
        );
    }

    play(item) {
        let obj = item;
        obj["key"] = 1;
        this.props.saveItem(obj);
    }
}

let initMapStateToProps=(state)=>{
    return{
        videoList:state.reducerFuYin.urls
    }
}
let initMapDispatchToProps=(dispatch)=>{
    return{
        saveItem:(item)=>{
            dispatch({type:ADD_ITEM, item})
        }
    }
}

export default connect(initMapStateToProps,initMapDispatchToProps)(Video);
