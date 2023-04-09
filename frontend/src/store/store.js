import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { postReducer } from "./Post/Post.reducer";
import { userReducer } from "./User/User.reducer";

const rootReducer = combineReducers({
    posts: postReducer,
    users:userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
