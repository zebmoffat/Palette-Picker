import arrows from "../img/arrows.svg";

function Button({
  request,
  palette,
  paletteType,
  setPaletteType,
  amount,
  setAmount,
}) {
  const buttonStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };

  const selectStyle = {
    color: `${palette[palette.length - 1]}`,
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    width: "160px",
  };

  const countSelectStyle = {
    color: `${palette[palette.length - 1]}`,
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    width: "45px",
  };

  function handleSelectChange(event) {
    const selected = event.target.value;
    setPaletteType(selected);
    localStorage.setItem("selectedPalette", selected);
  }

  function handleAmountChange(event) {
    const selected = event.target.value;
    setAmount(selected);
  }

  return (
    <div className="centerParent">
      <button
        className="centered"
        onClick={() => request(null)}
        style={buttonStyle}
      >
        <img src={arrows} style={{ paddingBottom: "1px" }} />
        &nbsp;Random Palette
      </button>
      <p style={{ color: palette[0] }}>Palette Type and Count</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <select
          id="paletteValue"
          name="paletteValue"
          value={paletteType}
          onChange={handleSelectChange}
          style={selectStyle}
        >
          <option value="monochrome">Monochrome</option>
          <option value="analogous">Analogous</option>
          <option value="complementary">Complementary</option>
          <option value="split">Split</option>
          <option value="tetradic">Tetradic</option>
          <option value="square">Square</option>
          <option value="cool">Cool</option>
          <option value="neutral">Neutral</option>
          <option value="warm">Warm</option>
        </select>

        <select
          id="amountValue"
          name="amountValue"
          value={amount}
          onChange={handleAmountChange}
          style={countSelectStyle}
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
}

export default Button;
