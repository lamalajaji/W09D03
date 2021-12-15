import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Login from "./Login";
import List from "./List";


const reducers = combineReducers({ Login, List });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
