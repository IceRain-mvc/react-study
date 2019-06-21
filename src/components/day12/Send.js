import React, {Component} from 'react';
import store from "./store/store";

class Send extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{

                    /*type:唯一*/
                    store.dispatch({type:"SEND_MESSGAE", data: "zhangsna"})
                }}>发布</button>
            </div>
        );
    }
}

export default Send;
