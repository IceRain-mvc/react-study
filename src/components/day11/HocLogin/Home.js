import React, {Component} from 'react';
import Header from "./Header";
import loginHocComponent from "./hoc/loginHocComponent";
import CreateModal from "./hoc/Cover";

function ModelAlert(props) {
    return <div>
        <h2>确定删除么</h2>
        <button>确定</button>
        <button>取消</button>
    </div>
}

ModelAlert = CreateModal(ModelAlert);


class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header/>
                <button onClick={()=>{

                }}>弹框</button>

                <ModelAlert />
                {/*<button onClick={()=>{*/}
                    {/*if (localStorage.getItem("token")) {*/}
                        {/*this.props.history.push("/detial");*/}
                    {/*} else {*/}
                        {/*this.props.history.push("/login");*/}
                    {/*}*/}
                {/*}}>Home跳转详情</button>*/}
            </div>
        );
    }
}

export default loginHocComponent(Home,"Home");
