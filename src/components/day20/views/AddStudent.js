import React, {Component} from 'react';
import {Button} from "antd";
import connect from "react-redux/es/connect/connect";

class AddStudent extends Component {

    state = {
        studentName: "",
        classId: 0
    };

    toStudentDetail(studentId) {
        this.props.history.push("/studentdetail", {studentId})
    }

    render() {
        let classObj = this.props.allData.filter((item, index) => {
            return item.id === this.props.location.state.classId;
        })[0];
        return (
            <div>
                <h1>添加学生</h1>

                <input type="text" value={this.state.studentName} onChange={(e) => {
                    this.setState({
                        studentName: e.target.value
                    })
                }}/>


                <Button type="primary" onClick={this.addStudent.bind(this)}>添加</Button>

                <ul style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                    {
                        this.props.allData.length !== 0 &&
                        classObj.studentList.length !== 0 &&
                        classObj.studentList.map((item, index) => {
                            return <li key={index}
                                       onClick={this.toStudentDetail.bind(this, item.studentId)}
                                       style={{
                                           border: "1px solid #ccc",
                                           width: "30%",
                                           height: "40px",
                                           lineHeight: "40px",
                                           textAlign: "center",
                                       }}>{item.studentName}</li>

                        })

                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            classId: this.props.location.state.classId
        })
    }

    addStudent() {
        //存到仓库
        let classId = this.props.location.state.classId;

        //{classId,studentId,name} ---> [{studentList:[{},],]   studentObj

        studentId++;
        let saveStudentObj = {
            classId, studentName: this.state.studentName, studentId
        };

        this.props.saveStudentObj(saveStudentObj);

    }
}

let studentId = 0;
let initMapStateToProps = (state) => {
    return {
        allData: state.reducerAll
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveStudentObj: (studentObj) => {
            dispatch({type: "ADD_STUDENT", studentObj})
        }

    };
};
export default connect(initMapStateToProps, initMapDispatchToProps)(AddStudent);
