import React, {Suspense} from 'react';
import RouterView from "./routers/RouterView";
import routes from "./routers/routerConfig";
import {BrowserRouter, NavLink} from "react-router-dom";

/*同步组件*/

// import Detail from "./components/Detail";
// import Me from "./components/Me";
// const Home = React.lazy(() => import("./components/Home"));
/*
* 优化:
*  1:生命周期  shouldComponentUpdate
*  2:  继承 React.PureComponent
*      优化 shouldComponentUpdate()
*  3:render
*   <Fragment>  </>
*   div>div>div>div>div>div>div>div
*
*   Sax  :  for
*   PULL :
*   DOM  :
*
*
* */
/*异步组件
* 1:
*
* */
// import Home from "./components/Home";
//
// class Day18 extends Component {
//     render() {
//         return (
//             <div>
//                 {/*<Home/>*/}
//                 {/*<Detail/>*/}
//                 {/*<Me/>*/}
//                 <Home/>
//             </div>
//         );
//     }
// }
class Day18 extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Suspense fallback={<div>Loading</div>}>
                        <RouterView routes={routes}/>
                    </Suspense>
                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/detail">详情</NavLink>
                    <NavLink to="/me">我的</NavLink>
                </div>
            </BrowserRouter>
        );
    }

}

export default Day18;
