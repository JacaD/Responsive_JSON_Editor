export const setData = (data, id) => ({
  type: "SET_DATA",
  data,
  id
});

export const setImagePath = imagePath => ({
  type: "SET_IMAGE_PATH",
  imagePath
});

export const setIsImageShowing = (isImageShowing, callerID) => {
  return {
    type: "SET_IS_IMAGE_SHOWING",
    isImageShowing,
    callerID
  };
};

export const setExpansionsPanelsState = (value, index) => {
  return {
    type: "SET_EXPANSIONS_PANEL_STATE",
    value,
    index
  };
};
