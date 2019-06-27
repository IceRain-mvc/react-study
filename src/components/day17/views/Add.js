import React, {Component} from 'react';
import List from "../component/List";
import filter from "../urils/filter";
import connect from "react-redux/es/connect/connect";

class Add extends Component {
    state = {
        input: "",
        filterData: []
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={(e) => {
                    let value = e.target.value;
                    this.setState({
                        input: value,
                        filterData: filter(this.props.allData, value)
                    });


                }}/>
                <List filterData={this.state.filterData}/>

            </div>
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

export default connect(initMapStateToProps, initMapDispatchToProps)(Add);

// export default Add;
