import React, {Component} from 'react';
import store from "./store/store";

class Home extends Component {

    state = {
        
    };

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                name: store.getState().detailReducer.name
            })
        })
    }

    render() {
        return (
            <div>

                <button onClick={() => {
                    /*
                    *
                    * 真{type:}
                    * */
                    store.dispatch({type: "ADD_LIST", data: [12, 3, 4, 5, 6]})
                }}>存储列表
                </button>

                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Home;
