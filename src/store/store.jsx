import { createStore } from "redux";
import reducers from "./reducers";
import data from "../data/data";
import formatJSONByKey from "../logic/dataFormatter";

export const store = createStore(
  reducers,
  {
    data: formatJSONByKey(data["properties"], "group")
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
