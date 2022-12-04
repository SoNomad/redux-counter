import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./cashReduser";
import { customerReducer } from "./customerReduser";

const rootReduser = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
