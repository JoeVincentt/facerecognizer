import React from "react";

const FaceRecognition = props => {
  const { imageUrl } = props;

  return (
    <div className="center ma4">
      <div className="absolute mb4">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};
export default FaceRecognition;
