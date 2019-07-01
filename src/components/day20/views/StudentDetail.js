import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class StudentDetail extends Component {
    render() {
        return (
            <div>
                <h1>学生详情</h1>
                <h2>{this.props.location.state.studentId}</h2>
            </div>
        );
    }
}

// export default StudentDetail;
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
export default connect(initMapStateToProps, initMapDispatchToProps)(StudentDetail);


