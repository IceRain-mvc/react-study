import React, {Component} from 'react';

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "自来也"
        }
    }


    /*-------------华丽丽的分割线---------------*/

    componentWillReceiveProps() {
        console.log("son:componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps, nextState) {
        //性能
        console.log("son:shouldComponentUpdate");

        if (nextProps.person !== this.props.person || this.state.user !== nextState.user) {
            return true
        }
        return false;
    }

    componentWillUpdate() {
        console.log("son:componentWillUpdate")
    }

    render() {
        console.log("son:render");
        console.log(this.props.person);
        return (
            <div>
                <button onClick={this.clickChangeState.bind(this)}>改变state中的值</button>
            </div>
        );
    }

    clickChangeState() {
        this.setState({
            user: "佩恩"
        })
    }


    componentDidUpdate() {
        console.log("son:componentDidUpdate")
    }


}

export default Son;
