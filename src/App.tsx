import React from "react";
import "./App.css";
import SampleWatchFace from "./WatchFaces/SampleWatchFace";

function App() {
  return (
    <div className="App">
      {/* <WatchFace key="w1" /> */}
      <SampleWatchFace key="sample" />
    </div>
  );
}

export default App;
