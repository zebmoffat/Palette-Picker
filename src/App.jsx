import { useEffect, useState } from "react";
import "./index.css";

import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import List from "./components/List.jsx";
import Canvas from "./components/Canvas.jsx";
import GlobalPalettes from "./components/GlobalPalettes.jsx";
import { getGlobalPalettes } from "./requests.jsx";

const API_URL = "https://server.zebmoffat.com/api/";

//http://server.zebmoffat.com:8080/api/

function App() {
  const [palette, setPalette] = useState(
    startUpColors() || JSON.parse(localStorage.getItem("palette"))
  );

  const [paletteType, setPaletteType] = useState(
    checkForSelectedPalette() || localStorage.getItem("paletteType")
  );

  const [amount, setAmount] = useState("4");

  const [globalPalettes, setGlobalPalettes] = useState([]);

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
    setDirection(newDirection);
  }, [palette]);

  useEffect(() => {
    getGlobalPalettes(setGlobalPalettes);
  }, []);

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(to ${direction}, ${
          palette[palette.length - 1]
        }, ${palette[Math.floor(palette.length / 2)]})`,
      }}
    >
      <Header palette={palette} />

      <Button
        request={localPalette}
        palette={palette}
        paletteType={paletteType}
        setPaletteType={setPaletteType}
        amount={amount}
        setAmount={setAmount}
      />

      <div className="sectionParent">
        <section style={{ width: "40%" }}>
          <Canvas palette={palette} />
        </section>

        <section style={{ width: "20%" }}>
          <ColorPicker
            request={localPalette}
            palette={palette}
            paletteType={paletteType}
          />
        </section>

        <section
          style={{ width: "40%", display: "flex", flexDirection: "row" }}
        >
          <GlobalPalettes
            palette={palette}
            globalPalettes={globalPalettes}
            getGlobalPalettes={getGlobalPalettes}
            setGlobalPalettes={setGlobalPalettes}
            setPalette={setPalette}
          />
        </section>
      </div>
      <p></p>
    </main>
  );

  function localPalette(givenColor) {
    fetch(
      API_URL +
        `palette?type=${paletteType}${
          givenColor ? "&color=" + givenColor : ""
        }&size=${amount}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json(); // Return the JSON promise
      })
      .then((data) => {
        console.log(data); // Now `data` is the parsed JSON

        localStorage.setItem("palette", JSON.stringify(data));

        setPalette(data);
      })
      .catch((error) => console.log("Error fetching palette:", error));

    return;
  }

  function requestPalette(givenColor) {
    const seedRGBColor = givenColor
      ? `rgb(${givenColor[0]},${givenColor[1]},${givenColor[2]})`
      : generateRandomRGBColor();

    const url = `https://www.thecolorapi.com/scheme?rgb=${seedRGBColor}&mode=${paletteType}&count=12`;

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

        localStorage.setItem("palette", JSON.stringify(colors));

        setPalette(colors);
      })
      .catch((error) => console.log("Error fetching palette:", error));
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
    if (!localStorage.getItem("palette")) {
      localStorage.setItem(
        "palette",
        JSON.stringify(["#bde6f8", "#90d5f2", "#63c3ec", "#37b0e5", "#1c97cc"])
      );
    }
    return null;
  }
}

function checkForSelectedPalette() {
  if (!localStorage.getItem("paletteType")) {
    localStorage.setItem("paletteType", "monochrome");
    return null;
  }
}

export default App;
