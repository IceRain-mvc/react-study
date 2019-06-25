import React, {Component} from 'react';
import {connect} from "react-redux";
/*导入仓库  store.getState()   store.dispatch()*/


/*connect:
* 操作props
*   映射到这props中
*   this.props.sss
*
* 生命周期
* 包装
*
* */

class Day13 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.saveToStore([1, 2, 3, 4, 5]);
                }}>存
                </button>

                <h1>{this.props.list}</h1>
            </div>
        );
    }
}

//this.props.list
let mapStateToProps = (state) => {
    console.log(state);
    /*return list  映射到了 props中*/
    return {
        list:state.reducer1
    }
};

//this.props.saveToStore()
let mapDispatchToProps = (dispatch) => {
    /*return : key值 映射到 props*/
    return {
        saveToStore:(list)=>{
            dispatch({type: "LIST1", data: list})
        }
    }
};
/*
* 存  取
* */
Day13 = connect(mapStateToProps,mapDispatchToProps)(Day13);
export default Day13;
