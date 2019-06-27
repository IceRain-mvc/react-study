import {ADD_OBJ} from "../action/action";

export default function (state={}, action) {
    switch (action.type) {
        case ADD_OBJ:
            state = action.data;
            return {...state};
        default:
            return {...state};

    }

};

