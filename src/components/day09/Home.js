import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    // Link,
    // Redirect,
    // Switch,
    // Route
} from "react-router-dom";
// import PageOne from "./views/PageOne";
// import PageTwo from "./views/PageTwo";
// import PageThree from "./views/PageThree";
import RouterView from "./router/RouterView";
import {routes} from "./router/routerConfig";

/*
* 1:无状态组件
* 2:有状态   构造:props
* */
//
// function PageFore(props) {
//     /*路由对象:
//     * 3个值
//     * history
//     *   push
//     *   replace
//     *
//     * location
//     *   search  参数
//     *   pathname  "路径"
//     * match
//     *   params  :   /key:id
//     * */
//     console.log(props);
//     return <div>
//         <h1>设置</h1>
//     </div>
// }


class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/detail">详情</NavLink>
                    <NavLink to="/me">我的</NavLink>
                    <NavLink to="/setting">设置</NavLink>

                    {/*<Switch>*/}
                    {/*<Route path="/home" component={PageOne}/>*/}
                    {/*<Route path="/detail" component={PageTwo}/>*/}
                    {/*<Route path="/me" component={PageThree}/>*/}
                    {/*<Route path="/setting" component={PageFore}/>*/}

                    {/*<Redirect exact to="/home"/>*/}
                    {/*</Switch>*/}

                    <RouterView routes={routes}/>
                    {/*
                        1:接受参数
                        2:遍历数组
                          Route path  component
                          重定向
                    */}

                    {/*<Switch>*/}
                    {/*<Route path="/home" component={PageOne}/>*/}
                    {/*<Route path="/detail" component={PageTwo}/>*/}
                    {/*<Route path="/me" component={PageThree}/>*/}
                    {/*<Route path="/setting" component={PageFore}/>*/}

                    {/*</Switch>*/}
                </div>
            </Router>
        );
    }
}

export default Home;
