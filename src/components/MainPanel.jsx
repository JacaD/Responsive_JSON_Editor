import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { setData } from "../store/actions";
import hideOnClickOutside from "../logic/hideOnClickOutside";
import ImagePanel from "./ImagePanel";
import CustomGrid from "./CustomGrid";
import CustomExpansionPanel from "./CustomExpansionPanel";
import {
  createCheckbox,
  createCombobox,
  createTextInput
} from "./componentProviders/InputComponentProvider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 15
  },
  paper: {
    height: 550,
    width: 440
  },
  control: {
    padding: theme.spacing(2)
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "baseline",
    marginLeft: 0
  },
  groupDiv: {
    display: "flex",
    padding: "0 10px",
    flexDirection: "column"
  }
}));

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataModified: data => {
      dispatch(setData(data));
    }
  };
};

function MainPanel({ data, onDataModified }) {
  let imageComponent = React.createRef();
  let classes = useStyles();
  let [isImageShown, setIsImageShown] = React.useState(false);
  let [expansionPanelsState, setExpansionPanelsState] = React.useState(e => {
    let initialState = [];
    Object.values(data).forEach(group => {
      let hasImage = Object.values(group).some(element => element["image"]);
      initialState.push([false, hasImage]);
    });
    return initialState;
  });
  let [imageSource, setImageSource] = React.useState("");
  let [previousImageShowCaller, setPreviousImageShowCaller] = React.useState(
    ""
  );
  let [outsideClickListener, setOutsideClickListener] = React.useState(null);

  function handleChecked(e, source, imageShowCaller) {
    let currentCheck = isImageShown;
    let isTimeout = false;
    if (previousImageShowCaller === "") {
      currentCheck = true;
    } else if (previousImageShowCaller === imageShowCaller) {
      currentCheck = currentCheck = !currentCheck;
    } else if (previousImageShowCaller !== imageShowCaller) {
      document.removeEventListener("click", outsideClickListener);
      currentCheck = false;
      isTimeout = true;
      setTimeout(
        () => {
          setIsImageShown(true);
          setImageSource(source);
        },
        isImageShown ? 300 : 0
      );
      e.stopPropagation();
    }

    setOutsideClickListener(
      hideOnClickOutside(imageComponent.current, e.target, setIsImageShown)
    );
    if (!isTimeout) setImageSource(source);
    setIsImageShown(currentCheck);
    setPreviousImageShowCaller(imageShowCaller);
  }

  let save = () => {
    onDataModified(data);
  };

  let updateExpansions = (e, b, index) =>
    setExpansionPanelsState(prev => {
      let newState = [...prev];
      newState[index][0] = b;
      return newState;
    });

  let createInputs = group => {
    let inputs = data[group];
    return Object.values(inputs).map((input, index) => {
      switch (input.type) {
        case "checkbox":
          return createCheckbox(input, group + index, classes, save);
        case "combobox":
          return createCombobox(input, group + index, classes, save);
        case "text":
          return createTextInput(
            input,
            group + index,
            classes,
            save,
            handleChecked
          );
        default:
          return null;
      }
    });
  };

  let editingPanel = (
    <Paper className={classes.paper}>
      <div className={classes.groupDiv}>
        {Object.keys(data).map((group, index) => {
          return (
            <div style={{ padding: 5 }} key={group}>
              <CustomExpansionPanel
                items={createInputs(group)}
                onChangeFunc={(e, b) => updateExpansions(e, b, index)}
                classes={classes}
                group={group}
              />
            </div>
          );
        })}
      </div>
    </Paper>
  );

  return (
    <CustomGrid
      classes={classes}
      items={[
        editingPanel,
        <ImagePanel
          classes={classes}
          expansionPanelsState={expansionPanelsState}
          checked={isImageShown}
          source={imageSource}
          reference={imageComponent}
        />,
        <Paper className={classes.paper} />
      ]}
    />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPanel);
