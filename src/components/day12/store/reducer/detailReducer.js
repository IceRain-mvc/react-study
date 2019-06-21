let detailReducer = (state={},action) => {
    switch (action.type) {
        case "ADD_OBJ":
            console.log("ADD_OBJ");
            state = action.data?action.data:{};
            return state;
        default:
            return state;
    }
};
export default detailReducer;
