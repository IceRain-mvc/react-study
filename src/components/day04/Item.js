import React, {Component} from 'react';
import "./Item.css";

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div>{this.props.name}</div>
            </div>
        );
    }
}

export default Item;
