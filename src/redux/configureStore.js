import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import userReducer from "./actions/USER_AUTH_LOGIN/reducer";
import searchReducer from "./actions/Dashboard/search/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  albums: {},
  songs: {}
});

const configureStore = initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware, logger)));

export default configureStore;
