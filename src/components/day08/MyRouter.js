import React, {Component} from 'react';
import Home from "./views/Home";
import About from "./views/About";
import Detail from "./views/Detail";
import "./RouterStyle.css"
import {routes} from "./router/routerConfig";

/*
* 使用路由
*
* vue 引入包 :
* hash xxxx/#/aaa?    history 没有#
*   tab切换
* 不会重新请求后台
* history : 会和后台交互
*   跳转页面(传参)
*
*
*   this.$router.
*
*   router-view
*
* */

import {
    BrowserRouter as Router,//history 1:只使用一次 2:只能嵌套一个跟标签
    HashRouter,//hash 1:只使用一次 2:只能嵌套一个跟标签,

    Route,//<Route path="/home" components={Home}">
    Link,//跳转的组件  to="跳转的路径",
    NavLink,// 添加样式
    Switch,// 管理 Route 只能有 Route Redirect
    Redirect,//重定向 from  to

} from "react-router-dom";


class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*<Link to="/home">首页</Link>*/}
                    {/*<Link to="/detail">详情</Link>*/}
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink activeClassName="active" to="/home">首页</NavLink>
                    <NavLink activeClassName="active" to="/detail">详情</NavLink>
                    <NavLink activeClassName="active" to="/about">关于</NavLink>


                    {/*<Route path="/home" components={Home}/>*/}
                    {/*<Route path="/about" components={About}/>*/}
                    {/*<Route path="/detail" components={Detail}/>*/}

                    <Switch>
                        {routes.map((item, index) => {
                            return <Route key={index} path={item.path} component={item.component}/>;
                        })}
                        <Redirect from="/" to="/home"/>
                    </Switch>


                </div>
            </Router>
        );
    }
}

export default MyRouter;
