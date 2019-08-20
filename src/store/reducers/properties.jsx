import data from "../../data/data";

let initialState = [
  ...data["properties"].map((property, index) => {
    return { ...property, id: index };
  })
];

export const properties = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return state.map(property => {
        return property.id === action.id
          ? { ...property, ...action.data }
          : property;
      });
    default:
      return state;
  }
};
