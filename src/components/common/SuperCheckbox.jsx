import React from "react";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { setData } from "../../store/actions";
import ImageButton from "./ImageButton";

const mapDispatchToProps = dispatch => {
  return {
    onDataModified: (data, id) => {
      dispatch(setData(data, id));
    }
  };
};

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const SuperCheckbox = ({ id, properties, onDataModified }) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div>
      <div key={input.id} className={"SuperCheckboxDiv"}>
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
      {input["image"] && <ImageButton id={id} />}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperCheckbox);
