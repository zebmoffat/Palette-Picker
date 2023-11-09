import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = ({ fiveColors }) => {
  const colorArray = Object.values(fiveColors);

  const [currentColor, setCurrentColor] = useState(colorArray[0]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const styles = {
    border: "1rem solid #9c9c9c",
    borderRadius: "2",
    height: "20rem",
  };

  return (
    <div className="centerParent">
      <div>
        {colorArray.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${color}`,
              width: "2rem",
              height: "2rem",
              border: "1px solid #ccc",
              display: "inline-block",
              cursor: "pointer",
              marginRight: "0.3rem",
            }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className="canvasArea">
        <div width="3rem">
          <ReactSketchCanvas
            strokeColor={`${currentColor}`}
            strokeWidth={20}
            width="95%"
            display="flex"
            style={styles}
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;