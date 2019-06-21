import React, {Component} from 'react';

class Login extends Component {
    state = {
        name: "",
        pwd: ""
    };
    render() {
        return (
            <div>
                <input type="text" placeholder="姓名"  value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name: e.target.value
                    })
                }}/>
                <input type="text" placeholder="密码" value={this.state.pwd} onChange={(e)=>{
                    this.setState({
                        pwd: e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    localStorage.setItem("name", this.state.name);
                    localStorage.setItem("pwd",this.state.pwd)
                    this.props.history.goBack();
                }}>登录</button>

            </div>
        );
    }
}

export default Login;
