import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "../reducers/rootReducers/rootReducers";
// import cartCounter from "../middlewares/cartCounter";
import thunk from "redux-thunk";
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
