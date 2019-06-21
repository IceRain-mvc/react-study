import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder={"请输入用户名"}/>
                <input type="text" placeholder={"请输入密码"}/>
            </div>
        );
    }
}

export default Login;
