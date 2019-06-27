import {createStore, combineReducers, applyMiddleware} from "redux";


let reducerAll = function (state = [], action) {
    /*1:打断点*/
    console.log(action.data);
    switch (action.type) {

        case"ADD_ALL":
            state = action.data;
            return [...state];
        default:
            return [...state];


    }

};

let reducers = combineReducers({reducerAll});

let store = createStore(reducers);

export default store;
