export const isShowing = (
  state = { isShowing: false, callerID: -1 },
  action
) => {
  switch (action.type) {
    case "SET_IS_SHOWING":
      return { isShowing: action.isShowing, callerID: action.callerID };
    default:
      return state;
  }
};
