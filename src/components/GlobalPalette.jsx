export default function GlobalPalette({ palette, setPalette }) {
  return (
    <div
      onClick={() => setPalette(palette.colors)}

      style={{
        cursor: "pointer",
        width: "100%",
        height: "28px",
        display: "flex",
        flexDirection: "row",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
      }}
    >
      {palette.colors.map((color, index) => {
        return (
          <div
            style={{ backgroundColor: color, height: "100%", flexGrow: 1 }}
            key={index}
          />
        );
      })}
    </div>
  );
}
