import React, {Component} from 'react';
import request from "./api/request";

class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    request();
                }}>请求数据</button>
            </div>
        );
    }
}

export default Home;
