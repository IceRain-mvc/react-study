import React, {Component} from 'react';
import store from "./store/store";
import homeReducer from "./store/reducer/homeReducer";

class Detail extends Component {

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }

    render() {
        let state = store.getState();
        console.log(state);
        return (
            <div>
                <button onClick={() => {
                    store.dispatch({type: "ADD_OBJ",data:{"name": "大哥好"}})
                }}>存储对象
                </button>


                <h1>{state.homeReducer}</h1>
            </div>
        );
    }
}

export default Detail;
