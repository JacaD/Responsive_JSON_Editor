export const imagePath = (state = "", action) => {
  switch (action.type) {
    case "SET_IMAGE_PATH":
      return action.imagePath;
    default:
      return state;
  }
};
