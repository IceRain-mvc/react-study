import React, {Component} from 'react';
import {connect} from "react-redux";

class Look extends Component {
    render() {
        return (
            <div>
                <h1>查看</h1>
                {
                    this.props.list.map((item, index) => {
                        return <div key={index}>
                            <span>{item.type}&nbsp;{item.bill}</span>
                        </div>
                    })

                }

                <div style={{backgroundColor: "#cded8B"}}>当月收入:{this.props.total}</div>
            </div>
        );
    }

    componentDidMount() {
        /*
        * 1:计算总数
        * 2:根据 this.props.list
        * */

        let total = 0;
        this.props.list.forEach((item, index) => {
            let billNew = parseFloat(item.bill);
            if (item.type === "收入") {
                total += billNew;
            } else {
                /*支出*/
                total -= billNew;
            }
        });

        /*
        * 要八total存到仓库中
        *
        * */

        this.props.saveTotal(total);

    }
}


let initMapStateToProps = (state) => {
    return {
        list: state.addReducer,
        total: state.totalReducer
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveTotal: (total) => {
            dispatch({type: "GET_TOTAL", total})
        }
    }
}

export default connect(initMapStateToProps, initMapDispatchToProps)(Look);
