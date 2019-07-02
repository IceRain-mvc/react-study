import React, {Component} from 'react';
import {Icon} from "antd";
import connect from "react-redux/es/connect/connect";

let arrClassId = [];

class ClassDetail extends Component {

    state = {
        classId: this.props.location.state.classId
    };

    toStudentDetail(studentId) {
        this.props.history.push("/studentdetail", {studentId})
    }

    // componentWillReceiveProps() {
    //     this.setState({
    //         classId: this.props.location.state.classId
    //     })
    // }


    render() {
        /*
        * 取出所有班级的id
        * */

        arrClassId = [];
        this.props.allData.forEach((item, index) => {
            arrClassId.push(item.id);
        });


        // console.log(this.props.location.state.classId);
        let classObj = this.props.allData.filter((item, index) => {
            // console.log(item);
            // console.log(this.state.classId);
            return item.id === this.state.classId;
        })[0];

        // console.log(classObj);


        return (
            <div>
                <h1>班级详情</h1>
                <Icon onClick={this.changeClass.bind(this)} style={{fontSize: "50px"}} type="double-right"/>
                <ul>
                    {
                        this.props.allData.length !== 0 &&
                        classObj&&classObj.studentList.length !== 0 &&
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


                <Icon type="plus" style={{fontSize: "50px"}} onClick={this.addStudent.bind(this)}/>

            </div>
        );
    }

    addStudent() {
        //跳路由
        this.props.history.push("/addstudent", {classId: this.props.location.state.classId});
    }


    changeClass() {
        if (arrClassId.length > 1) {
            //this.props.location.state.classId

            arrClassId.forEach((item, index) => {
                if (arrClassId[index] === this.state.classId) {

                    if (index >= arrClassId.length - 1) {
                        this.setState({
                            classId: arrClassId[0]
                        });
                    } else {
                        this.setState({
                            classId: arrClassId[index + 1]
                        });
                    }
                }
            })
        }
    }
}

// export default ClassDetail;

let initMapStateToProps = (state) => {
    return {
        allData: state.reducerAll
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        // saveStudentObj: (studentObj) => {
        //     dispatch({type: "ADD_STUDENT", studentObj})
        // }
    };
};
export default connect(initMapStateToProps, initMapDispatchToProps)(ClassDetail);
