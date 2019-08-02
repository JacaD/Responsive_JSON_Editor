import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

const SuperCheckbox = ({
  id,
  properties,
  onDataModified,
  onIsImageShowingModified,
  callerID,
  isShowing,
  onImagePathModified
}) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div>
      <div
        key={input.id}
        style={{
          marginLeft: -5,
          display: "flex",
          flexGrow: 2,
          paddingLeft: 0
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => {
                onDataModified({ value: !input.value }, input.id);
              }}
              checked={input.value}
            />
          }
          label={input.label + ":"}
          labelPlacement="start"
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
)(SuperCheckbox);
