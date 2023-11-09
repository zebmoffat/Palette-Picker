import arrows from "../img/arrows.svg";

function Button({ request, fiveColors, paletteType, setPaletteType }) {
  let buttonStyle = {
    backgroundColor: `${fiveColors[1]}`,
    border: `2px solid ${fiveColors[5]}`,
    color: `${fiveColors[5]}`,
  };

  let pStyle = {
    color: `${fiveColors[1]}`,
  };

  let selectStyle = {
    color: `${fiveColors[5]}`,
    backgroundColor: `${fiveColors[1]}`,
    border: `2px solid ${fiveColors[5]}`,
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