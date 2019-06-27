import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import reducerFuYin from "./reducer/reducerFuYin";
import reducerItem from "./reducer/reducerItem";

let reducers = combineReducers({reducerFuYin,reducerItem});

let store = createStore(reducers,applyMiddleware(thunk));
export default store;
