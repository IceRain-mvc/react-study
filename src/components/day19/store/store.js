import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";


let reducerAll = function (state = [], action) {
    switch (action.type) {
        case"ADD_ALL":
            console.log(action.data);
            state = action.data;
            return [...state];
        default:
            return [...state];


    }

};

let reducers = combineReducers({reducerAll});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
