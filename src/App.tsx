import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WatchFace from "./Components/WatchFace";

function App() {
  return (
    <div className="App">
      <WatchFace key="w1" />
    </div>
  );
}

export default App;
