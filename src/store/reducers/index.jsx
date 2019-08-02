import { properties } from "./properties";
import { imagePath } from "./imagePath";
import { isShowing } from "./isShowing";
import { expansionPanelsState } from "./expansionPanelsState";
import { combineReducers } from "redux";

export default combineReducers({
  properties,
  imagePath,
  isShowing,
  expansionPanelsState
});
