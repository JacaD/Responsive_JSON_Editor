import React from "react";
import CustomAppBar from "./components/CustomAppBar";
import MainPanel from "./components/MainPanel";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomAppBar text="Responsive JSON Editor" />
        <br />
        <MainPanel />
      </div>
    );
  }
}

export default App;
