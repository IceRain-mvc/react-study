import React, {Component} from 'react';
import Son from "./Son";
import SonNew from "./SonNew";

class Father extends Component {

    constructor(props) {
        super(props);
        console.log("father:constructor");
        this.state = {
            person: "波风水门",
            list: [1, 2, 3, 4]

        }
    }

    componentWillMount() {
        console.log("father:componentWillMount");

    }

    clickChangeProps() {
        this.setState({
            person: "旋涡鸣人"
        })
    }

    render() {
        console.log("father:render");

        return (
            <div>
                <button onClick={this.clickChangeProps.bind(this)}>父组件改变子组件中的Props</button>
                <hr/>
                <Son person={this.state.person}/>
                <hr/>

                <button onClick={() => {
                    let newList = this.state.list;
                    newList.push(6);
                    this.setState({
                        list: newList
                    })
                }}>改变list的值传到子组件
                </button>
                <hr/>
                <SonNew user={this.state.person} list={this.state.list}/>
                <hr/>


            </div>
        );
    }

    componentDidMount() {
        console.log("father:componentDidMount")


    }


}

export default Father;
