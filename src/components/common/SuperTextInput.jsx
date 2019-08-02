import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
    imagePath: state.imagePath,
    isShowing: state.isShowing.isShowing,
    callerID: state.isShowing.callerID
  };
};

const SuperTextInput = ({
  id,
  properties,
  isShowing,
  onIsImageShowingModified,
  onImagePathModified,
  onDataModified,
  callerID
}) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div key={input.id} style={{ display: "flex", alignContent: "flex-start" }}>
      <div style={{ display: "flex", flexGrow: 2 }}>
        <TextField
          label={input.label}
          className={null}
          defaultValue={input.value}
          onBlur={e => {
            onDataModified(e.target.value, input.id);
          }}
          margin="normal"
          style={{ display: "flex", flexGrow: 2, marginLeft: 10 }}
        />
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
)(SuperTextInput);
