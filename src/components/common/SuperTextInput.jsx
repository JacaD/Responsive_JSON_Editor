import React from "react";
import TextField from "@material-ui/core/TextField";
import ImageButton from "./ImageButton";

const SuperTextInput = ({ input, onDataModified }) => {
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
      {input["image"] && <ImageButton id={input.id} />}
    </div>
  );
};

export default SuperTextInput;
