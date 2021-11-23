import { combineReducers } from "redux";
import reducer from "./currencyReducer";
import currencyReducer from "./currencyReducer";

const reducers = combineReducers({
    currency: currencyReducer
});

export default reducers;
