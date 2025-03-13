import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ palette, paletteType, request }) => {
  const [background, setBackground] = useState("#000000");

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

  const buttonStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
    marginTop: "5px"
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
        {paletteType !== "cool" &&
          paletteType !== "neutral" &&
          paletteType !== "warm" && (
            <button
              onClick={() => request(background.replace("#", "%23"))}
              style={buttonStyle}
            >
              Palette from Color
            </button>
          )}
      </div>
    </>
  );
};

export default ColorPicker;
