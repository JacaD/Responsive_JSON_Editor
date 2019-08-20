import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import CustomExpansionPanel from "./CustomExpansionPanel";
import createInputs from "./common/providers/createInputs";
import formatJSONByKey from "../logic/dataFormatter";
import { setExpansionsPanelsState, setData } from "../store/actions";

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPanelsChange: (value, index) => {
      dispatch(setExpansionsPanelsState(value, index));
    },
    onDataModified: (data, id) => {
      dispatch(setData(data, id));
    }
  };
};

function EditingPanel({ properties, onPanelsChange, onDataModified }) {
  let data = formatJSONByKey(properties, "group");
  return (
    <Paper classes={{ root: "Paper" }}>
      <div className={"GroupDiv"}>
        {Object.keys(data).map((group, index) => {
          return (
            <CustomExpansionPanel
              key={index}
              items={createInputs(
                data[group].reduce((acc, input) => [...acc, input], []),
                onDataModified
              )}
              onChangeFunc={(e, value) => onPanelsChange(value, index)}
              group={group}
            />
          );
        })}
      </div>
    </Paper>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingPanel);
