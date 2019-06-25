import  {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
/*
* thunk : 改造了 真的 dispatch (函数)
*
* 1:包  react-thunk
* 2:在哪用呢?
* */


let addReducer = function (state=[],action) {
    switch (action.type) {
        case "ADD":
            state.push(action.obj);
            return [...state];
        case "ADD_LIST":
            state = action.list;
            console.log(state);
            return [...state];
        default:
            return [...state];
    }
};

let totalReducer = function (state=0,action) {
    switch (action.type) {
        case "GET_TOTAL":
            //let list = store.getState().addReducer;
            state = action.total;

            return state;
        default:
            return state;
    }
};

let reducers = combineReducers({
    addReducer,totalReducer
});
/*
* 3:放到createStore 第二个参数中
* */
let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

/*真的dispatch*/

// let next = store.dispatch;

// store.dispatch = function (fn) {
//     fn && fn();
//     // next({})
// };


export default store;
