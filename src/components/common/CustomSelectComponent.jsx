import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import SuperSelectField from "material-ui-superselectfield";
import { setData } from "../../store/actions";
import theme from "../../styles";

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

function CustomSelectComponent({ id, properties, onDataModified }) {
  let [inputValue, setInputValue] = React.useState("");
  let ref = React.createRef();
  let options = properties[id]["options"];
  let label = properties[id].label;
  return (
    <div className="superSelectFieldDiv">
      <MuiThemeProvider theme={createMuiTheme(theme)}>
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
                className={"addButton"}
                style={theme.addButton}
                onClick={() => {
                  if (inputValue) {
                    let newOptions = [...properties[id].options];
                    newOptions.push(inputValue);
                    onDataModified({ options: newOptions }, id);
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
          style={theme.superSelectField}
          elementHeight={53}
          showAutocompleteThreshold={1}
        >
          {options.map(option => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                key={option}
                value={option}
                className="SelectEntry"
              >
                <div>{option}</div>
                <div>
                  <Button
                    onClick={e => {
                      e.stopPropagation();
                      let newOptions = [...options];
                      newOptions.splice(newOptions.indexOf(option), 1);
                      onDataModified({ options: newOptions }, id);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSelectComponent);
