import React, { useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = ({ palette }) => {
  const [currentColor, setCurrentColor] = useState(palette[0]);
  const [canvasKey, setCanvasKey] = useState(0); // Key to trigger re-render

  useEffect(() => {
    setCurrentColor(palette[0]); // Update color on change
    setCanvasKey((prevKey) => prevKey + 1); // Force canvas reload
  }, [palette]);

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
        {palette.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "2rem",
              height: "2rem",
              border:
                currentColor === color ? "2px solid #fff" : "1px solid #fff", // Increase border for selected color
              display: "inline-block",
              cursor: "pointer",
              marginRight: "0.3rem",
            }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
      <div className="canvasArea">
        <div width="3rem">
          <ReactSketchCanvas
            key={canvasKey} // Forces re-render when fiveColors changes
            strokeColor={currentColor}
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
