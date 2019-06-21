import React, {Component} from 'react';
import Item from "./Item";

class List extends Component {

    // static getDerivedStateFromProps(nextProps){
    //     //把props赋值给state
    //     return {list: nextProps.list}
    // }

    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        return this.props.list.length !== nextProps.list.length || this.state.flag !== nextState.flag;
    }


    render() {
        return (
            <div>
                {this.state.flag && <div style={{backgroundColor: "green", color: "#ffffff"}}>有更新</div>}
                {this.props.list.map((item, index) => {
                    //index   {id:} id
                    return <Item key={index} {...item}/>
                })}
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps) {
        console.log("以前:", prevProps.list);
        console.log("以前:",this.props.list);

        if (this.props.list.length !== prevProps.list.length) {
            return true;
        }
        return false;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        if (snapshot) {
            this.setState({
                flag: true
            });

            setTimeout(() => {
                this.setState({
                    flag: false
                })
            }, 2000);

        }
    }
}

export default List;
