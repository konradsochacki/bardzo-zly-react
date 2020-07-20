import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
