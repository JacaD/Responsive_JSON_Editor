import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setImagePath, setIsImageShowing } from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    onImagePathModified: path => {
      dispatch(setImagePath(path));
    },
    onIsImageShowingModified: (isImageShowing, callerID) => {
      dispatch(setIsImageShowing(isImageShowing, callerID));
    }
  };
};

const mapStateToProps = state => {
  return {
    properties: state.properties,
    isImageShowing: state.isImageShowing.isImageShowing,
    callerID: state.isImageShowing.callerID
  };
};

function ImageButton({
  id,
  callerID,
  properties,
  isImageShowing,
  onIsImageShowingModified,
  onImagePathModified
}) {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div className={"ImageButtonDiv"}>
      <Button
        classes={{ root: "ImageButton" }}
        variant="outlined"
        color="primary"
        onClick={e => {
          if (isImageShowing && callerID === id) {
            onIsImageShowingModified(false, id);
          } else if (!isImageShowing) {
            onImagePathModified(input["image"]);
            onIsImageShowingModified(true, input.id);
          } else if (isImageShowing && callerID !== input.id) {
            onImagePathModified(input["image"]);
            onIsImageShowingModified(true, input.id);
          }
        }}
      >
        Image
      </Button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageButton);
