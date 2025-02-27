import ColorSquare from "./ColorSquare";

function Header({ fiveColors }) {
  const colorValues = Object.values(fiveColors);

  return (
    <header>
      <h1 style={{ color: colorValues[0] }} className="rotate">
        Palette Picker
      </h1>
      <h2 style={{ color: colorValues[0] }}>Generate a color palette</h2>

      <div className="colorRow">
        {colorValues.map((color, index) => (
          <ColorSquare givenColor={color} key={index} />
        ))}
      </div>
    </header>
  );
}

export default Header;
