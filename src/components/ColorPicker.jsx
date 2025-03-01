import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ palette, request }) => {
  const [background, setBackground] = useState("rgb(0, 0, 0)");

  const handleChangeComplete = (color) => {
    setBackground(color.rgb);
  };

  const parseRgb = (rgb) => {
    return [rgb.r, rgb.g, rgb.b];
  };

  const buttonStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };

  return (
    <>
      <div className="sketch">
        <SketchPicker
          color={background}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      <div className="centerParent">
        <button
          onClick={() => request(parseRgb(background))}
          style={buttonStyle}
        >
          Palette from Color
        </button>
      </div>
    </>
  );
};

export default ColorPicker;
