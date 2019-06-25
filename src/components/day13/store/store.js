import {createStore,combineReducers} from "redux";


let reducer1 = function (state = [], action) {
    switch (action.type) {
        case "LIST1":
            console.log(action.data);

            state = action.data;
            return [...state];

        case "LIST2":
            return;

        case "LIST3":
            return;

        case "LIST4":
            return;
        default:
            return [...state];
    }
};

let reducers = combineReducers({
    reducer1
});

let store = createStore(reducers);

export default store;
