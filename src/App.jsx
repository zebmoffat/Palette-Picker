import { useEffect, useState } from "react";
import "./index.css";

import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import List from "./components/List.jsx";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [fiveColors, setFiveColors] = useState(
    startUpColors() || {
      1: JSON.parse(localStorage.getItem("currentColor"))[0],
      2: JSON.parse(localStorage.getItem("currentColor"))[1],
      3: JSON.parse(localStorage.getItem("currentColor"))[2],
      4: JSON.parse(localStorage.getItem("currentColor"))[3],
      5: JSON.parse(localStorage.getItem("currentColor"))[4],
    }
  );
  const [paletteType, setPaletteType] = useState(
    checkForSelectedPalette() || localStorage.getItem("selectedPalette")
  );

  const [direction, setDirection] = useState("bottom");

  useEffect(() => {
    const directions = [
      "top",
      "bottom",
      "left",
      "right",
      "top left",
      "top right",
      "bottom left",
      "bottom right",
    ];
    const newDirection =
      directions[Math.floor(Math.random() * directions.length)];
    console.log(newDirection);
    setDirection(newDirection);
  }, [fiveColors]);

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(to ${direction}, ${fiveColors[5]}, ${fiveColors[3]})`,
      }}
    >
      <Header fiveColors={fiveColors} />
      <Button
        request={request}
        fiveColors={fiveColors}
        paletteType={paletteType}
        setPaletteType={setPaletteType}
      />

      <div className="sectionParent">
        <section>
          <Canvas fiveColors={fiveColors} />
        </section>

        <section>
          <ColorPicker request={request} fiveColors={fiveColors} />
        </section>

        <section>
          <List fiveColors={fiveColors} setFiveColors={setFiveColors} />
        </section>
      </div>
      <p></p>
    </main>
  );

  function request(givenColor) {
    const seedRGBColor = givenColor
      ? `rgb(${givenColor[0]},${givenColor[1]},${givenColor[2]})`
      : generateRandomRGBColor();

    const url = `https://www.thecolorapi.com/scheme?rgb=${seedRGBColor}&mode=${paletteType}&count=5`;

    /*
    different themes for mode in url

    monochrome: Generates a monochromatic color scheme based on the seed color.

    monochrome-dark: Generates a monochromatic color scheme with darker shades.

    monochrome-light: Generates a monochromatic color scheme with lighter shades.

    analogic: Generates an analogous color scheme based on the seed color.

    complement: Generates a color scheme with complementary colors.

    analogic-complement: Combines an analogous and a complementary color scheme.

    triad: Generates a triadic color scheme.

    quad: Generates a tetradic (four-color) color scheme.
    */

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let colors = data.colors.map((color) => color.rgb.value);

        colors.reverse();

        localStorage.setItem("currentColor", JSON.stringify(colors));

        setFiveColors({
          1: colors[0],
          2: colors[1],
          3: colors[2],
          4: colors[3],
          5: colors[4],
        });
      })
      .catch((error) => console.error("Error fetching color scheme:", error));
  }

  function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
  }

  function generateRandomRGBColor() {
    const red = getRandomRGBValue();
    const green = getRandomRGBValue();
    const blue = getRandomRGBValue();
    return `rgb(${red},${green},${blue})`;
  }

  function startUpColors() {
    if (localStorage.getItem("currentColor")) {
      return null;
    } else {
      localStorage.setItem(
        "currentColor",
        JSON.stringify([
          "rgb(189, 230, 248)",
          "rgb(144, 212, 242)",
          "rgb(99, 194, 236)",
          "rgb(55, 176, 229)",
          "rgb(28, 151, 204)",
        ])
      );
      return null;
    }
  }
}

function checkForSelectedPalette() {
  if (!localStorage.getItem("selectedPalette")) {
    localStorage.setItem("selectedPalette", "monochrome");
    return null;
  }
}

export default App;
