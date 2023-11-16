import { useState } from "react";

function ColorSquare({ givenColor }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };



  return (
    <div
      className="color"
      style={givenColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && <div className="colorOverlay">{givenColor.backgroundColor.toUpperCase()}</div>}
    </div>
  );
}

export default ColorSquare;
