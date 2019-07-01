import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";


let reducerAll = function (state = [], action) {
    switch (action.type) {
        case"ADD_CLASS":
            console.log(action.classObj);
            state.push(action.classObj);

            let newState = JSON.parse(JSON.stringify(state));

            return [...newState];
        case"ADD_STUDENT":
            let classId = action.studentObj.classId;
            let classObj = state.filter((item, index) => {
                return item.id === classId
            })[0];

            classObj.studentList.push(action.studentObj);

            //state 先截取  再添加
            state.forEach((item, index) => {
                if (item.id === classId) {
                    state.splice(index, 1,classObj)
                }
            });
            let stateAdd = JSON.parse(JSON.stringify(state));

            console.log(stateAdd);

            return [...stateAdd];
        default:
            return [...state];
    }
};

let reducers = combineReducers({reducerAll});

/*
* (fn)  ({})
* */
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
