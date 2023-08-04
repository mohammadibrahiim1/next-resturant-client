import { combineReducers } from "redux";
import itemReducer from "../itemReducers/itemReducers";

const rootReducers = combineReducers({
  item: itemReducer,
});

export default rootReducers;
