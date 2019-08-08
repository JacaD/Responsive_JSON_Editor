import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setData, setImagePath, setIsShowing } from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    onDataModified: (data, id) => {
      dispatch(setData(data, id));
    },
    onImagePathModified: path => {
      dispatch(setImagePath(path));
    },
    onIsImageShowingModified: (isShowing, callerID) => {
      dispatch(setIsShowing(isShowing, callerID));
    }
  };
};

const mapStateToProps = state => {
  return {
    properties: state.properties,
    isShowing: state.isShowing.isShowing,
    callerID: state.isShowing.callerID
  };
};

function ImageButton({
  id,
  callerID,
  properties,
  isShowing,
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
          if (isShowing && callerID === id) {
            onIsImageShowingModified(false, id);
          } else if (!isShowing) {
            onImagePathModified(input["image"]);
            onIsImageShowingModified(true, input.id);
          } else if (isShowing && callerID !== input.id) {
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
