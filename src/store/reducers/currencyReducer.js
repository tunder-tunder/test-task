
const reducer = (state, action) => {
    switch (action.type) {
        case "dollar":
            return action.payload;
        case "ruble":
            return action.payload;
        case "euro":
            return action.payload;
        default:
            return state = "dollar";
    } 
};

export default reducer;