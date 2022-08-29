import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import friends from "../features/friends";

const reducer = combineReducers({
  friends,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
