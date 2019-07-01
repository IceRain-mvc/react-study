import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

let id=0;

class CreateClass extends Component {
    state = {
        className: ""
    };

    render() {
        return (
            <div>
                <h1>创建班级</h1>
                <input type="text" value={this.state.className} onChange={(e) => {
                    this.setState({
                        className: e.target.value
                    })
                }}/>
                <button onClick={this.createClass.bind(this)}>完成创建</button>

            </div>
        );
    }

    createClass() {
        id++;
        let obj = {
            className: this.state.className,
            id: id,
            studentList:[]
        };

        //存到仓库
        this.props.saveClassObj(obj);
        //跳路由

        this.props.history.push("/classdetail",{classId: id})
    }
}

// export default CreateClass;

let initMapDispatchToProps = (dispatch) => {
    return {
        saveClassObj: (classObj) => {
            dispatch({type: "ADD_CLASS", classObj})
        }

    };
};
export default connect((state) => {
    return {}
}, initMapDispatchToProps)(CreateClass);
