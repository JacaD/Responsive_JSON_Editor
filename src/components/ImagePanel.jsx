import React from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

function ImagePanel({
  classes,
  expansionPanelsState,
  checked,
  source,
  reference
}) {
  return (
    <Paper
      className={classes.paper}
      style={{
        overflow: "hidden"
      }}
      ref={reference}
    >
      <div style={{ position: "relative" }} id="imageDiv">
        <div
          id="promptBar"
          style={{
            height: "100vh",
            width: "1vh",
            backgroundColor: expansionPanelsState.some(
              x => x[0] === true && x[1] === true
            )
              ? "#eaeaea"
              : "#fff"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%"
          }}
        >
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <div>
              <img
                src={source}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="images"
              />
            </div>
          </Slide>
        </div>
      </div>
    </Paper>
  );
}

export default ImagePanel;
