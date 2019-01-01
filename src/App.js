import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>Nav</Navigation>
        {/* <Logo>Logo</Logo>
        <ImageLinkForm>Image Link</ImageLinkForm>
        <FaceRecognition>Face Recognition</FaceRecognition> */}
      </div>
    );
  }
}

export default App;
