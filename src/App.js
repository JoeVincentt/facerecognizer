import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
// import Particles from "react-particles-js";

import "./App.css";

// Overheating hardware...
// const particlesOptions = {
//   particles: {
//     number: {
//       value: 40,
//       density: {
//         enabled: true,
//         value_area: 800
//       }
//     },
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//   },
//   retina_detect: false
// };

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
  apiKey: "32e8e3d21c8a4c5ea30a559ef94bcd28"
});

class App extends Component {
  state = {
    input: "",
    imageUrl: ""
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    console.log("click");
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function(err) {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <div className="App">
        {/* <Particles className="particles" params={particlesOptions} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
