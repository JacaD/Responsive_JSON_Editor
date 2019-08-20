import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "material-ui/styles";
import SuperSelectField from "material-ui-superselectfield";

function CustomSelectComponent({ input, onDataModified }) {
  let [inputValue, setInputValue] = React.useState("");
  let ref = React.createRef();

  React.useEffect(() => {
    ref.current.root.className = "SuperSelectField";
  });

  return (
    <div className="SuperSelectFieldDiv">
      <MuiThemeProvider>
        <SuperSelectField
          onAutoCompleteTyping={e => {
            setInputValue(e);
            console.log(ref.current);
          }}
          floatingLabel={input.label}
          floatingLabelStyle={{
            color: "#757575",
            fontFamily: "Roboto"
          }}
          floatingLabelFocusStyle={{ color: "#03A9F4", fontFamily: "Roboto" }}
          noMatchFound={
            input.options.length === 0 ? (
              <div>Nothing to show</div>
            ) : (
              <Button
                classes={{ root: "AddButton" }}
                onClick={() => {
                  if (inputValue) {
                    let newOptions = [...input.options];
                    newOptions.push(inputValue);
                    onDataModified({ options: newOptions }, input.id);
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
          elementHeight={53}
          showAutocompleteThreshold={1}
        >
          {input.options.map(option => {
            return (
              <div key={option} value={option} className="SelectEntry">
                <div>{option}</div>
                <div>
                  <Button
                    onClick={e => {
                      e.stopPropagation();
                      let newOptions = [...input.options];
                      newOptions.splice(newOptions.indexOf(option), 1);
                      onDataModified({ options: newOptions }, input.id);
                    }}
                  >
                    delete
                  </Button>
                </div>
              </div>
            );
          })}
        </SuperSelectField>
      </MuiThemeProvider>
    </div>
  );
}

export default CustomSelectComponent;
