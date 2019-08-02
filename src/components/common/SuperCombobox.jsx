import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import DialogBox from "../DialogBox";
import CustomSelectComponent from "../common/CustomSelectComponent";
import { setImagePath, setIsShowing } from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
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

const SuperCombobox = ({
  id,
  properties,
  onIsImageShowingModified,
  isShowing,
  onImagePathModified,
  callerID
}) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div
      key={id}
      style={{ marginLeft: -3, display: "flex", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexGrow: 2 }}>
        <CustomSelectComponent id={id} />
      </div>
      <div>
        <DialogBox id={id} />
      </div>
      {input["image"] && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={e => {
              if (isShowing && callerID === input.id) {
                onIsImageShowingModified(false, input.id);
              } else if (!isShowing) {
                onImagePathModified(input["image"]);
                onIsImageShowingModified(true, input.id);
              } else if (isShowing && callerID !== input.id) {
                onImagePathModified(input["image"]);
                onIsImageShowingModified(true, input.id);
              }
            }}
            style={{
              height: "36px",
              width: "45px",
              marginLeft: 5,
              marginRight: 5
            }}
          >
            Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperCombobox);
