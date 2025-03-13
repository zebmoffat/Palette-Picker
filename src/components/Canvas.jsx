import React, { useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = ({ palette }) => {
  const [currentColor, setCurrentColor] = useState(palette[0]);
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setCurrentColor(palette[0]);
    setCanvasKey((prevKey) => prevKey + 1);
  }, [palette]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const styles = {
    border: "1rem solid #9c9c9c",
    borderRadius: "2",
    height: "320px",
  };

  const clearStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };

  return (
    <div className="centerParent">
      {palette.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "2rem",
            height: "2rem",
            border:
              currentColor === color ? "2px solid #fff" : "1px solid #fff",
            display: "inline-block",
            cursor: "pointer",
            marginRight: "0.3rem",
          }}
          onClick={() => handleColorChange(color)}
        />
      ))}
      <div className="canvasArea">
        <div width="3rem">
          <ReactSketchCanvas
            key={canvasKey}
            strokeColor={currentColor}
            strokeWidth={20}
            width="95%"
            display="flex"
            style={styles}
          />
        </div>
      </div>
      <button
        style={clearStyle}
        onClick={() => setCanvasKey((prevKey) => prevKey + 1)}
      >
        Clear
      </button>
    </div>
  );
};

export default Canvas;