import React from "react";
import Button from "@material-ui/core/Button";
import SuperSelectField from "material-ui-superselectfield";
import { MuiThemeProvider } from "material-ui/styles";
import DeleteButton from "./DeleteButton";

function CustomSelectComponent({ label, options, save }) {
  let [inputValue, setInputValue] = React.useState("");
  let ref = React.createRef();
  return (
    <div style={{ display: "flex", flexGrow: 2 }}>
      <MuiThemeProvider>
        {options !== undefined && (
          <SuperSelectField
            onAutoCompleteTyping={e => {
              setInputValue(e);
            }}
            floatingLabelStyle={{
              display: "flex",
              alignItems: "flex-start",
              fontSize: "18px",
              color: "#757575"
            }}
            floatingLabel={label}
            noMatchFound={
              options.length === 0 ? (
                <div>Nothing to show</div>
              ) : (
                <Button
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  onClick={() => {
                    if (inputValue) {
                      options.push(inputValue);
                      save();
                    }
                    ref.current.closeMenu();
                  }}
                >
                  add
                </Button>
              )
            }
            ref={ref}
            name="state11"
            hintText=""
            value={null}
            style={{
              display: "flex",
              minWidth: 150,
              margin: 0,
              alignItems: "stretch",
              flexGrow: 1,
              padding: 5
            }}
            elementHeight={53}
            showAutocompleteThreshold={1}
          >
            {options.map(option => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                key={option}
                value={option}
              >
                <div>{option}</div>
                <div>
                  <DeleteButton
                    onClick={e => {
                      e.stopPropagation();
                      console.log(option);
                      console.log(options);
                      console.log(options.find(e => e === option));
                      options.splice(options.indexOf(option), 1);
                      save();
                    }}
                  >
                    delete
                  </DeleteButton>
                </div>
              </div>
            ))}
          </SuperSelectField>
        )}
      </MuiThemeProvider>
    </div>
  );
}

export default CustomSelectComponent;
