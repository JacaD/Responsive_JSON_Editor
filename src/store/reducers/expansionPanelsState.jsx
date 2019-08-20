import data from "../../data/data";
import formatJSONByKey from "../../logic/dataFormatter";

let initialState = [];
Object.values(formatJSONByKey(data["properties"], "group")).forEach(group => {
  let hasImage = Object.values(group).some(element => element["image"]);
  initialState.push({ isExpanded: false, hasImage });
});

export const expansionPanelsState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXPANSIONS_PANEL_STATE":
      return state.map((panel, index) =>
        action.index === index ? { ...panel, isExpanded: action.value } : panel
      );
    default:
      return state;
  }
};
