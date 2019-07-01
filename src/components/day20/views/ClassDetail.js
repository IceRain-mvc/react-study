import React, {Component} from 'react';
import {Icon} from "antd";

class ClassDetail extends Component {

    state = {
        classId: 0
    };

    componentDidMount() {
        this.setState({
            classId: this.props.location.state.classId
        });
    }

    render() {
        return (
            <div>
                <h1>班级详情</h1>
                <Icon type="plus" style={{fontSize: "50px"}} onClick={this.addStudent.bind(this)}/>

            </div>
        );
    }

    addStudent() {
        //跳路由
        this.props.history.push("/addstudent", {classId: this.state.classId});



    }
}

export default ClassDetail;
