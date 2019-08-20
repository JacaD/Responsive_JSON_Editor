import React from "react";
import DialogBox from "../DialogBox";
import CustomSelectComponent from "../common/CustomSelectComponent";
import ImageButton from "./ImageButton";

const SuperCombobox = ({ input, onDataModified }) => {
  return (
    <div key={input.id} className={"SuperComboboxDiv"}>
      <div className={"CustomSelectComponentDiv"}>
        <CustomSelectComponent input={input} onDataModified={onDataModified} />
      </div>
      <div>
        <DialogBox input={input} onDataModified={onDataModified} />
      </div>
      {input["image"] && <ImageButton id={input.id} />}
    </div>
  );
};

export default SuperCombobox;
