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
import ReduxHome from "./components/day12/ReduxHome";

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
                <ReduxHome/>
            </>
        );
    }


}

export default App;
