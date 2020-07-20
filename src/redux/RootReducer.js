import { combineReducers } from "redux";
import reducer from "./products/ProductsReducer";

const RootReducer = combineReducers({
  products: reducer,
});

export default RootReducer;
