import GlobalPalette from "./GlobalPalette";

import { postPalette } from "../requests";

export default function GlobalPalettes({
  palette,
  globalPalettes,
  getGlobalPalettes,
  setGlobalPalettes,
  setPalette,
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginTop: "10px",
          width: "50%",
          height: "400px",
          backgroundColor: palette[0],
          border: `2px solid ${palette[Math.floor(palette.length / 2)]}`,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "26px",
            color: palette[palette.length - 1],
          }}
        >
          Global Palettes
        </p>

        {globalPalettes.length > 0 && (
          <div
            style={{
              border: "1px solid black",
              borderLeft: "3px solid black",
              borderRight: "3px solid black",
              width: "95%",
            }}
          >
            {globalPalettes.map((colors, index) => {
              return (
                <GlobalPalette
                  palette={colors}
                  setPalette={setPalette}
                  key={index}
                />
              );
            })}
          </div>
        )}

        <button
          style={{
            marginTop: "auto",
            marginBottom: "5px",
            backgroundColor: palette[0],
            border: `2px solid ${palette[palette.length - 1]}`,
            color: `${palette[palette.length - 1]}`,
          }}
          onClick={() =>
            postPalette(palette, getGlobalPalettes, setGlobalPalettes)
          }
        >
          Send Palette to Global
        </button>
      </div>
    </div>
  );
}

/**
 


  const clearStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };



 */
