import React from "react";
import SuperCheckbox from "../SuperCheckbox";
import SuperCombobox from "../SuperCombobox";
import SuperTextInput from "../SuperTextInput";

const createInputs = inputs => {
  return inputs.map(input => {
    switch (input.type) {
      case "checkbox":
        return <SuperCheckbox id={input.id} />;
      case "combobox":
        return <SuperCombobox id={input.id} />;
      case "text":
        return <SuperTextInput id={input.id} />;
      default:
        return null;
    }
  });
};

export default createInputs;
