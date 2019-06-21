import React, {Component} from 'react';
import Header from "./Header";
import loginHocComponent from "./hoc/loginHocComponent";

class Page extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<button onClick={()=>{*/}
                    {/*if (localStorage.getItem("token")) {*/}
                        {/*this.props.history.push("/detial");*/}
                    {/*} else {*/}
                        {/*this.props.history.push("/login");*/}
                    {/*}*/}
                {/*}}>Page跳转详情</button>*/}

            </div>
        );
    }
}


export default loginHocComponent(Page,"Page");
