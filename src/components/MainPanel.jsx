import React from "react";
import Paper from "@material-ui/core/Paper";
import ImagePanel from "./ImagePanel";
import EditingPanel from "./EditingPanel";
import CustomGrid from "./CustomGrid";

function MainPanel() {
  return (
    <CustomGrid
      items={[<EditingPanel />, <ImagePanel />, <Paper className={"paper"} />]}
    />
  );
}

export default MainPanel;
