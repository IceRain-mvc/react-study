import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import TypeV from "./components/day07/TypeV";
// import Change from "./components/day04/onChange/Change";
// import Day01 from "./components/day01/Index";
// import Day02 from "./components/day02/Day02";
// import JiSuanQi from "./components/day02/jisuanqi/JiSuanQi";
// import Father from "./components/day03/Father";
// import Day04 from "./components/day04/Day04";
// import Day05 from "./components/day05/Day05";
// import Music from "./components/day05/Music/Music";
// import Day06 from "./components/day06/Day06";
// import Home from "./components/day06/Home/Home";
// import Index from "./components/day08/Index";
// import MyRouter from "./components/day08/MyRouter";
// import Home from "./components/day09/Home";
// import Baby from "./components/day09/baby/Baby";
// import Baby from "./components/day10/baby.js";
// import Father from "./components/day11/Father";
// import Index from "./components/day11/HocLogin/Index";
// import ReduxHome from "./components/day12/ReduxHome";
import {Provider} from "react-redux";
// import store from "./components/day13/store/store";
// import Day13 from "./components/day13/Day13";
// import Day14 from "./components/day14/Day14";
// import store from "./components/day14/store/store";
// import Home from "./components/day15/Home";
// import Index from "./components/day15/fuyin/views/Index";
// import store from "./components/day15/store/store";
// import Home from "./components/day16/Home";
import Day17 from "./components/day17/Day17";
import store from "./components/day17/store/store";
// import store from "./components/day15/fuyin/store";

//创建一个组件  1:无状态组件 function形式存在 2:有状态组件 class  state
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//无状态组件 没有 state   类:有状态组件 有state
class App extends React.Component {
    render() {
        return (
            <>
                {/*<Day01/>*/}
                {/*<Day02 />*/}
                {/*<JiSuanQi/>*/}
                {/*<Father/>*/}
                {/*<Day04 />*/}
                {/*<Change />*/}
                {/*<Day05/>*/}
                {/*<Music />*/}
                {/*<Day06/>*/}
                {/*<Home/>*/}
                {/*<TypeV/>*/}
                {/*<Index/>*/}
                {/*<MyRouter/>*/}
                {/*<Home/>*/}
                {/*<Baby/>*/}
                {/*<Day10/>*/}
                {/*<Baby/>*/}
                {/*<Father/>*/}

                {/*<Index/>*/}
                {/*Provider: connect 和store关联起来*/}
                {/*1:Provider store={store}*/}
                <Provider store={store}>
                    {/*<Index/>*/}
                    {/*<Home/>*/}
                    <Day17/>
                </Provider>
            </>
        );
    }


}

export default App;
