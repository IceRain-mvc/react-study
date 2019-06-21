import React, {Component} from 'react';
import store from "./store/store";

class Receiver extends Component {

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }

    render() {
        let state = store.getState();
        return (
            <div>
                <h3>{state}</h3>
                {/*收值*/}
            </div>
        );
    }
}

export default Receiver;
