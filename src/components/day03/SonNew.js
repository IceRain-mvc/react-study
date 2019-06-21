import React, {Component} from 'react';

let list

class SonNew extends Component {

    /*新:更新阶段的生命周期*/

    //1:state
    //2:props
    //3:forceUpdate

    state = {
        user: "",
        list:[]
    };

    constructor(props) {
        super(props);

    }

    // static getDerivedStateFromProps(nextProps) {
    //     //2:1
    //     //不能使用this:
    //     // static :
    //     // this.setState({
    //     //     user:nextProps.user
    //     // })
    //     return {user: nextProps.user}
    // }

    render() {
        // 不能这么写 this.setState({
        //     user: this.props.user
        // });
        console.log(this.state.user);
        return (
            <div>
                {this.state.user}

                <div>

                    {this.state.list.map((item, index) => {
                        return <div key={index}>

                            {item}
                        </div>
                    })}
                </div>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("newProps:" + this.props.list);
        console.log("oldState:" + this.state.list);
        console.log("prevProps:" + prevProps.list);


        if (this.state.list.length !== this.props.list.length) {
            return 60;
        }

        return 0;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);

        if (prevProps.list.length!==this.state.list.length) {
            this.setState({list: prevProps.list})
        }

    }


}

export default SonNew;
