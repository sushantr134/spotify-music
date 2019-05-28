import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import userReducer from "./actions/USER_AUTH_LOGIN/reducer";
import searchReducer from "./actions/Dashboard/search/reducer";
import albumReducer from "./actions/Dashboard/albums/reducer";
import tracksReducer from "./actions/Dashboard/tracks/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  albums: albumReducer,
  tracks: tracksReducer
});

const configureStore = initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware, logger)));

export default configureStore;
