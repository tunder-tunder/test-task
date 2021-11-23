export const setCurrency = (currency) => {
    return (dispatch) => {
        dispatch({
            type: "dollar",
            payload: currency
        })
    }
}