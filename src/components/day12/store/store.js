/*
* 下载 npm install redux --save
* */
import {createStore,combineReducers} from "redux";
import homeReducer from "./reducer/homeReducer";
import detailReducer from "./reducer/detailReducer";

/*
* 2:创建reducer 功能
* */

let reducers = combineReducers({homeReducer,detailReducer});

/*
* 1:创建仓库
* */
let store = createStore(reducers);



export default store;
