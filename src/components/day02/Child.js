import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "小心隔壁老王"
        }
    }

    clickToParent(){
        //vue:this.$emit
        this.props.onHandleChild(this.state.name);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickToParent.bind(this)}>告诉你个秘密</button>

            </div>
        );
    }
}

export default Child;
