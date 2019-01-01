import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";

import "./App.css";

// Overheating hardware...
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enabled: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  },
  retina_detect: false
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Particles className="particles" params={particlesOptions} /> */}
        <Navigation>Nav</Navigation>
        <Logo>Logo</Logo>
        <Rank />
        <ImageLinkForm>Image Link</ImageLinkForm>
        {/* <FaceRecognition>Face Recognition</FaceRecognition> */}
      </div>
    );
  }
}

export default App;
