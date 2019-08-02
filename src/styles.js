const theme = {
  overrides: {
    MuiGrid: {
      item: {
        padding: 10,
        "& > .MuiPaper-root": {
          height: 550,
          width: 430
          // "& .promptBar": {
          //   height: "100vh",
          //   width: "1vh"
          // }
        },
        "& .promptBar": {
          height: "100%",
          width: "2%"
        },
        "& .imageDiv": {
          height: "100%",
          width: "100%"
        },
        "& .groupDiv": {
          display: "flex",
          padding: 10,
          flexDirection: "column"
        },
        "& .MuiExpansionPanel-root": {
          marginLeft: 5,
          marginRight: 5
        },
        "& .gridContainer": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        "& .button": {
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        },

        "& .superSelectField": {
          display: "flex",
          minWidth: 150,
          margin: 10,
          alignItems: "stretch",
          flexGrow: 1,
          padding: 5
        },
        "& .superSelectFieldDiv": {
          display: "flex",
          flexGrow: 2
        }
      }
    }
  },
  superSelectField: {
    display: "flex",
    minWidth: 150,
    margin: 10,
    alignItems: "stretch",
    flexGrow: 1,
    padding: 5
  },
  addButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default theme;
