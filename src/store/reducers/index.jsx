import { properties } from "./properties";
import { imagePath } from "./imagePath";
import { isImageShowing } from "./isImageShowing";
import { expansionPanelsState } from "./expansionPanelsState";
import { combineReducers } from "redux";

export default combineReducers({
  properties,
  imagePath,
  isImageShowing,
  expansionPanelsState
});
