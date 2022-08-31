import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import messages from "../features/messages";

const reducer = combineReducers({ messages });

const store = createStore(reducer, applyMiddleware(logger));

export default store;
