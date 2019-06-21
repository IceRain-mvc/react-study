import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

class RouterView extends Component {
    /*
    * 1:接收参数
    * */
    render() {
        let {routes} = this.props;

        //取出重定向
        //routes 数组  redirect
        let arrRedirect = routes.filter((item, index) => {
            return item.redirect;
        });

        //exact  /aaa    /aaa/123     /视频 id 123
        let RedirectS = arrRedirect.map((item, index) => {
            return <Redirect key={index} from={item.path} exact to={item.redirect}/>;
        });

        //把重定向的项 从routes去掉  方便遍历
        routes = routes.filter((item) => !item.redirect);

        //arrRedirect 数组
        //Route
        //Route
        //Route
        //<Route>
        //<Route>
        //[<Redirect>,<Redirect><Redirect><Redirect><Redirect>]


        return (
            /*Fragment*/
            <Switch>
                {routes.map((item, index) => {
                    //component={item.component}
                    return <Route path={item.path} key={index} render={(props) => {
                        /*props : 路由对象
                        *   history
                        *       push
                        *       replace
                        *       ...
                        *   location
                        *       pathname
                        *       search
                        *   match
                        *       params
                        *       url
                        *
                        * */
                        return <>
                            {item.children && <item.component children={item.children} {...props}/>}
                            {!item.children && <item.component {...props}/>}
                        </>
                    }}/>;
                })}

                {RedirectS.length !== 0 && RedirectS}
            </Switch>
        );
    }
}

// RouterView = withRouter(RouterView);

export default RouterView;
