import React from "react";
import { connect } from "react-redux";
import DialogBox from "../DialogBox";
import CustomSelectComponent from "../common/CustomSelectComponent";
import ImageButton from "./ImageButton";

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const SuperCombobox = ({ id, properties }) => {
  const input = Object.values(properties).filter(
    property => property.id === id
  )[0];
  return (
    <div key={id} className={"SuperComboboxDiv"}>
      <div className={"CustomSelectComponentDiv"}>
        <CustomSelectComponent id={id} />
      </div>
      <div>
        <DialogBox id={id} />
      </div>
      {input["image"] && <ImageButton id={id} />}
    </div>
  );
};

export default connect(mapStateToProps)(SuperCombobox);
