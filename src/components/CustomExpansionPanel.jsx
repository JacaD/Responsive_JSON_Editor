import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";

function CustomExpansionPanel({ items, onChangeFunc, group }) {
  return (
    <ExpansionPanel onChange={onChangeFunc}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{group}</Typography>
      </ExpansionPanelSummary>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{}}>
            {item}
          </div>
        ))}
      </div>
    </ExpansionPanel>
  );
}

export default CustomExpansionPanel;
