import { combineReducers } from "redux";
import itemReducer from "../itemReducers/itemReducers";
import filterReducer from "../filterReducers/filterReducers";

const rootReducers = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});

export default rootReducers;
