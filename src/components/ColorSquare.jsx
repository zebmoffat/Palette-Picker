import { useState } from "react";

function ColorSquare({ givenColor }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCopied(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(givenColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div
      style={{ backgroundColor: givenColor }}
      className="color"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {hovered && (
        <div className="colorOverlay">{copied ? "Copied!" : givenColor}</div>
      )}
    </div>
  );
}

export default ColorSquare;
