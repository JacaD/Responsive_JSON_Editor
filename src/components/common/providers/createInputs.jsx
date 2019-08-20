import React from "react";
import SuperCheckbox from "../SuperCheckbox";
import SuperCombobox from "../SuperCombobox";
import SuperTextInput from "../SuperTextInput";

const createInputs = (inputs, onDataModified) => {
  return inputs.map(input => {
    switch (input.type) {
      case "checkbox":
        return <SuperCheckbox input={input} onDataModified={onDataModified} />;
      case "combobox":
        return <SuperCombobox input={input} onDataModified={onDataModified} />;
      case "text":
        return <SuperTextInput input={input} onDataModified={onDataModified} />;
      default:
        return null;
    }
  });
};

export default createInputs;
