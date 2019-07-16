import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import DialogBox from "../DialogBox";
import CustomSelectComponent from "../common/CustomSelectComponent";

let createTextInput = (input, key, classes, save, handleChecked) => {
  return (
    <div key={key} className={classes.itemDiv}>
      <TextField
        label={input.label}
        className={null}
        defaultValue={input.value}
        onBlur={e => {
          input.value = e.target.value;
          save();
        }}
        margin="normal"
        style={{ display: "flex", flexGrow: 2 }}
      />
      {input["image"] && (
        <Button
          variant="outlined"
          color="primary"
          onClick={e => handleChecked(e, input["image"], key)}
          style={{ height: "36px", width: "45px", marginLeft: 5 }}
        >
          Image
        </Button>
      )}
    </div>
  );
};

let createCombobox = (input, key, classes, save) => {
  return (
    <div key={key} className={classes.itemDiv} style={{ marginLeft: -3 }}>
      <div style={{ display: "flex", flexGrow: 2 }}>
        <CustomSelectComponent
          options={input.options}
          label={input.label}
          save={save}
        />
      </div>
      <div>
        <DialogBox label={input.label} options={input.options} save={save} />
      </div>
    </div>
  );
};

let createCheckbox = (input, key, classes, save) => {
  return (
    <div
      key={key}
      className={classes.itemDiv}
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
              input.value = !input.value;
              save();
            }}
            checked={input.value}
          />
        }
        label={input.label + ":"}
        labelPlacement="start"
      />
    </div>
  );
};

export { createTextInput, createCombobox, createCheckbox };
