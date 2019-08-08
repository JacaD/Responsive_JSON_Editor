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
    <Paper className={"Paper ImagePaper"}>
      <div className={"ImageDiv"}>
        <div
          className={"PromptBar"}
          style={{
            backgroundColor: expansionPanelsState.some(x => x[0] && x[1])
              ? "#eaeaea"
              : "#fff"
          }}
        />
        <div className={"ImageSlideDiv"}>
          <Slide direction="right" in={isShowing} mountOnEnter unmountOnExit>
            <div>
              <img src={imagePath} className={"Image"} alt="images" />
            </div>
          </Slide>
        </div>
      </div>
    </Paper>
  );
};

export default connect(mapStateToProps)(ImagePanel);
