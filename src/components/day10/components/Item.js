import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Item extends Component {
    jumpDetail() {
        this.props.history.push("/detail/" + this.props.id,this.props.downurl);
    }
    render() {
        let {pic,name} = this.props;
        return (
            <li onClick={this.jumpDetail.bind(this)}>
                <img className="" src={pic} alt=""/>
                <h3>{name}</h3>
            </li>
        );
    }
}

/*withRouter : 高阶函数: 组件作为参数  组件作为返回值 */
Item = withRouter(Item);//

export default Item;
