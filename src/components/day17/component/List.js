import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class List extends Component {
    render() {
        console.log("render");
        return (
            <ul>
                {this.props.filterData.map((item, index) => {
                    return <li key={index} style={{display: "flex", justifyContent: "space-around"}}>
                        <div>

                            {item.name}
                        </div>
                        <div onClick={() => {
                            if (item.isAdd) {
                                return;
                            }
                            /*
                            * 添加到仓库中
                            * */
                            let newArr = this.props.allData;

                            this.props.allData.forEach((i, ind) => {
                                if (item.id === i.id) {
                                    newArr[ind].isAdd = true;
                                }
                            });
                            this.props.saveData(newArr);

                        }
                        }>
                            {item.isAdd && "已在该组"}
                            {!item.isAdd && "添加"}
                        </div>
                    </li>
                })}
                <li>
                    <button onClick={()=>{
                        // this.name = "";
                        //
                        // this.forceUpdate();
                    }}>强制更新</button>
                </li>
            </ul>

        );
    }

    // shouldComponentUpdate() {
    //     return false;
    // }
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
export default connect(initMapStateToProps, initMapDispatchToProps)(List);

// export default List;
