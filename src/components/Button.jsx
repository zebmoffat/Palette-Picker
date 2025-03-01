import arrows from "../img/arrows.svg";

function Button({ request, palette, paletteType, setPaletteType }) {
  let buttonStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };

  let pStyle = {
    color: `${palette[0]}`,
  };

  let selectStyle = {
    color: `${palette[palette.length - 1]}`,
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    width: '13.5rem'
  }

  function handleSelectChange(event) {
    const selected = event.target.value;
    setPaletteType(selected);
    localStorage.setItem("selectedPalette", selected);
  }

  return (
    <div className="centerParent">
      <button
        className="centered"
        onClick={() => request(null)}
        style={buttonStyle}
      >
        <img src={arrows} />
        &nbsp;Random Palette
      </button>
      <p style={pStyle}>Palette Type</p>
      <select id="paletteValue" name="paletteValue" value={paletteType} onChange={handleSelectChange} style={selectStyle} >
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome-Dark</option>
        <option value="monochrome-light">Monochrome-Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic-Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
    </div>
  );
}


export default Button;