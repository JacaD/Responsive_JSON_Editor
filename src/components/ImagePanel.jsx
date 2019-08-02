import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

const mapStateToProps = state => {
  return {
    imagePath: state.imagePath,
    isShowing: state.isShowing.isShowing,
    expansionPanelsState: state.expansionPanelsState
  };
};

const ImagePanel = ({ expansionPanelsState, isShowing, imagePath }) => {
  return (
    <Paper
      className={"paper"}
      style={{
        overflow: "hidden"
      }}
    >
      <div style={{ position: "relative" }} className={"imageDiv"}>
        <div
          className={"promptBar"}
          style={{
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
          <Slide direction="right" in={isShowing} mountOnEnter unmountOnExit>
            <div>
              <img
                src={imagePath}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="images"
              />
            </div>
          </Slide>
        </div>
      </div>
    </Paper>
  );
};

export default connect(mapStateToProps)(ImagePanel);
