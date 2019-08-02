import React from "react";
import CustomAppBar from "./components/CustomAppBar";
import MainPanel from "./components/MainPanel";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createGenerateClassName } from "@material-ui/styles";
import JssProvider from "react-jss/lib/JssProvider";
import "./App.css";
import theme from "./styles";

// const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

class App extends React.Component {
  render() {
    return (
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <div className="App">
            <CustomAppBar text="Responsive JSON Editor" />
            <br />
            <MainPanel />
          </div>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;
