import {ADD_ITEM} from "../action/action";

export default function (state={}, action) {
    switch (action.type) {
        case ADD_ITEM:
            state = action.item;
            return {...state};
        default:
            return {...state};
    }
};

