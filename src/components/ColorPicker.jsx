import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    background: "rgb",
    backgroundColor: "#141414",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.rgb });
  };

  parseRgb = (rgb) => {
    let rgbArr = [rgb.r, rgb.g, rgb.b];
    return rgbArr;
  };

  render() {
    let buttonStyle = {
      backgroundColor: `${this.props.fiveColors[1]}`,
      border: `2px solid ${this.props.fiveColors[5]}`,
      color: `${this.props.fiveColors[5]}`,
    };

    return (
      <>
        <div className="sketch">
          <SketchPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <div className="centerParent">
          <button
            onClick={() =>
              this.props.request(this.parseRgb(this.state.background))
            }
            style={buttonStyle}
          >
            Palette from Color
          </button>
        </div>
      </>
    );
  }
}

export default ColorPicker;