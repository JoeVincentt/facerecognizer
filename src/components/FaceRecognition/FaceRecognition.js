import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = props => {
  const { imageUrl, box } = props;

  return (
    <div className="center ma4">
      <div className="absolute mb2">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};
export default FaceRecognition;
