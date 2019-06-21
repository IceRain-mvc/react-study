import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <li>
                <p>
                    {this.props.name}
                </p>
                <p>
                    {this.props.age}
                </p>
            </li>
        );
    }
}

export default List;
