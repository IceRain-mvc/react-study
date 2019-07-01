import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Answer extends Component {
    render() {
        let {questions} = this.props;
        let index = this.props.location.state.index;

        console.log(this.props);
        return (
            <div>

                {questions && <h1>{questions.title}</h1>}


                {/*
                    题目
                */}

                <h2>{questions.questions[index].title}</h2>

                {
                    questions.questions[index].questionChoices.map((item,index)=>{
                        return <li>
                            <a >{item.order}</a>
                            <span>{item.content}</span>
                        </li>
                    })

                }


            </div>
        );
    }
}

// export default connect(Answer);


let initMapStateToProps = (state) => {
    return {
        questions: state.reducerAll[0]

    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData: (fn) => {
            dispatch(fn)
        }

    };
};
export default connect(initMapStateToProps, initMapDispatchToProps)(Answer);
