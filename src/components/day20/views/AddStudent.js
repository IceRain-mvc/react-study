import React, {Component} from 'react';
import {Button} from "antd";
import connect from "react-redux/es/connect/connect";

class AddStudent extends Component {

    state = {
        studentName: ""
    };

    render() {
        return (
            <div>
                <h1>添加学生</h1>

                <input type="text" value={this.state.studentName} onChange={(e) => {
                    this.setState({
                        studentName: e.target.value
                    })
                }}/>

                <Button type="primary" onClick={this.addStudent.bind(this)}>添加</Button>
            </div>
        );
    }

    addStudent() {
        //存到仓库
        let classId = this.props.location.state.classId;

        //{classId,studentId,name} ---> [{studentList:[{},],]   studentObj

        let saveStudentObj = {
            classId, studentName: this.state.studentName,
        };

        this.props.saveStudentObj(saveStudentObj);

    }
}

let initMapStateToProps = (state) => {
    return {}
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveStudentObj: (studentObj) => {
            dispatch({type: "ADD_STUDENT", studentObj})
        }

    };
};
export default connect(initMapStateToProps, initMapDispatchToProps)(AddStudent);
