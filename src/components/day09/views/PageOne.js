import React, {Component} from 'react';
import {
    NavLink,
    // Route,
    // Switch,
    // Redirect
} from "react-router-dom";
// import Child1 from "./pageone/Child1";
// import Child2 from "./pageone/Child2";
// import Child3 from "./pageone/Child3";
import RouterView from "../router/RouterView";
import {routes} from "../router/routerConfig";

class PageOne extends Component {

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return (
            <>
                <h1>首页</h1>
                <NavLink to="/home/child1">儿子1</NavLink>
                <NavLink to="/home/child2">儿子2</NavLink>
                <NavLink to="/home/child3">儿子3</NavLink>

                <button onClick={() => {
                    this.props.history.push("/video/123");
                    console.log(this.props);
                }}>跳转详情
                </button>

                {/*<Switch>*/}
                {/*<Route path="/home/child1" component={Child1}/>*/}
                {/*<Route path="/home/child2" component={Child2}/>*/}
                {/*<Route path="/home/child3" component={Child3}/>*/}
                {/*/!*<Redirect to="/home/child1"/>*!/*/}
                {/*</Switch>*/}


                {/*routes[0].children}*/}
                <RouterView routes={this.props.children}/>
            </>
        );
    }
}

export default PageOne;
