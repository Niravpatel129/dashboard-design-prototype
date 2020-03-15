import { combineReducers } from "redux";
import loginsReducer from "./loginReducer";
import drawerReducer from "./drawerReducer";

export default combineReducers({ loginsReducer, drawerReducer });
