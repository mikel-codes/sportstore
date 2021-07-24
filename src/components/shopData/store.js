import { createStore, applyMiddleware } from "redux";
import { CartReducer } from "./actions/reducers/cartReducer";
import { CommonReducer } from "./actions/reducers/commonReducer";
import { ShopReducer } from "./actions/reducers/shopReducer";
import { asyncActions } from "./asyncMiddleware";

export const StoreData = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
);
