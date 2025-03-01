import ColorSquare from "./ColorSquare";

function Header({ palette }) {
  return (
    <header>
      <h1 style={{ color: palette[0] }} className="rotate">
        Palette Picker
      </h1>
      <h2 style={{ color: palette[0] }}>Generate a color palette</h2>

      <div className="colorRow">
        {palette.map((color, index) => (
          <ColorSquare givenColor={color} key={index} />
        ))}
      </div>
    </header>
  );
}

export default Header;
