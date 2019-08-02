import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import CustomExpansionPanel from "./CustomExpansionPanel";
import createInputs from "./common/providers/createInputs";
import formatJSONByKey from "../logic/dataFormatter";
import { setExpansionsPanelsState } from "../store/actions";

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPanelsChange: (value, index) => {
      dispatch(setExpansionsPanelsState(value, index));
    }
  };
};

function EditingPanel({ properties, onPanelsChange }) {
  let data = formatJSONByKey(properties, "group");
  return (
    <Paper className={"paper"}>
      <div className={"groupDiv"}>
        {Object.keys(data).map((group, index) => {
          return (
            <CustomExpansionPanel
              key={index}
              items={createInputs(
                data[group].reduce(
                  (acc, input) => [...acc, { id: input.id, type: input.type }],
                  []
                )
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
