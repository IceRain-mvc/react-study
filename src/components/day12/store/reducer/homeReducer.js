let homeReducer = (state=[],action) => {

    switch (action.type) {
        case "ADD_LIST":
            console.log("ADD_LIST");
            state = action.data ? action.data : [];
            return state;
        default:
            return state;
    }
};

export default homeReducer;
