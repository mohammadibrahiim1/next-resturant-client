import { createStore } from "redux";
import rootReducers from "../reducers/rootReducers/rootReducers";
const store = createStore(rootReducers);
export default store;
