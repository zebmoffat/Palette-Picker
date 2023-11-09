function Header({ fiveColors }) {
  let color1 = {
    backgroundColor: `${fiveColors[1]}`,
  };

  let color2 = {
    backgroundColor: `${fiveColors[2]}`,
  };

  let color3 = {
    backgroundColor: `${fiveColors[3]}`,
  };

  let color4 = {
    backgroundColor: `${fiveColors[4]}`,
  };

  let color5 = {
    backgroundColor: `${fiveColors[5]}`,
  };

  let headerStyle = {
    color: `${fiveColors[1]}`
  };

  return (
    <header>
      <h1 style = {headerStyle} className="rotate">Palette Picker</h1>
      <h2 style = {headerStyle}>Generate a color palette</h2>

      <div className="colorRow">
        <div className="color" style={color1} />

        <div className="color" style={color2} />

        <div className="color" style={color3} />

        <div className="color" style={color4} />

        <div className="color" style={color5} />
      </div>
    </header>
  );
}

export default Header;