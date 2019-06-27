import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Button} from "antd";

class Edit extends Component {
    render() {

        let newArr = this.props.allData.filter((item) => {
            return item.isAdd;
        });
        return (
            <ul>
                {
                    newArr.map((item,index)=>{
                        return <li>
                            <label htmlFor={item.id}>
                                <input id={item.id} type="checkbox" value={item.id} onChange={(e)=>{
                                    console.log(e.target.value);

                                }}/>

                                {item.name}
                            </label>
                        </li>
                    })
                }

                <Button>{"删除("+3+")"}</Button>
            </ul>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        allData: state.reducerAll
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => {
            dispatch({type: "ADD_ALL", data})
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Edit);

// export default Edit;
