import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ImageButton from "./ImageButton";

const SuperCheckbox = ({ input, onDataModified }) => {
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
      {input["image"] && <ImageButton id={input.id} />}
    </div>
  );
};

export default SuperCheckbox;
