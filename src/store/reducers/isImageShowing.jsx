export const isImageShowing = (
  state = { isImageShowing: false, callerID: -1 },
  action
) => {
  switch (action.type) {
    case "SET_IS_IMAGE_SHOWING":
      return {
        isImageShowing: action.isImageShowing,
        callerID: action.callerID
      };
    default:
      return state;
  }
};
