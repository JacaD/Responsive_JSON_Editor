import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
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

const SuperTextInput = ({ id, properties, onDataModified }) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div key={input.id} className={"SuperTextInputDiv"}>
      <div className={"TextFieldDiv"}>
        <TextField
          label={input.label}
          className={null}
          defaultValue={input.value}
          onBlur={e => {
            onDataModified({ value: e.target.value }, input.id);
          }}
          margin="normal"
          classes={{ root: "TextField" }}
        />
      </div>
      {input["image"] && <ImageButton id={id} />}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperTextInput);
