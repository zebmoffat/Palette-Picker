import { useState } from "react";

function List({ palette, setPalette }) {
  const [favoritesList, setFavoritesList] = useState(
    JSON.parse(localStorage.getItem("colorOptions")) || []
  );

  let textColor2 = {
    color: `${palette[palette.length - 1]}`,
  };

  let buttonStyle = {
    backgroundColor: `${palette[0]}`,
    border: `2px solid ${palette[palette.length - 1]}`,
    color: `${palette[palette.length - 1]}`,
  };

  function addToFavorites(colors, name) {
    if (name == null || name == "") {
      name = "new palette";
    }

    const newFavorite = {
      name: name,
      colors: colors,
    };

    let newFavoritesList = favoritesList.slice();
    newFavoritesList.push(newFavorite);
    setFavoritesList(newFavoritesList);

    localStorage.setItem("colorOptions", JSON.stringify(newFavoritesList));
  }

  function removeFromFavorites(name) {
    console.log(name);
    const removeList = favoritesList.filter((object) => object.name !== name);
    setFavoritesList(removeList);
    localStorage.setItem("colorOptions", JSON.stringify(removeList));
  }

  return (
    <div style={{backgroundColor: "afafaf", width: "100%", height: "100%"}}>
      <p style={textColor2}>Favorites</p>
      <select name="favorites" id="favorites" multiple>
        {favoritesList.map((object, index) => (
          <option
            value={object.colors}
            key={index}
            onClick={() => {
              setPalette(object.colors);
              localStorage.setItem(
                "currentColor",
                JSON.stringify([
                  object.colors[1],
                  object.colors[2],
                  object.colors[3],
                  object.colors[4],
                  object.colors[5],
                ])
              );
            }}
          >
            {object.name}
          </option>
        ))}
      </select>
      <div className="centerParent">
        <div>
          <button
            style={buttonStyle}
            onClick={() =>
              addToFavorites(
                palette,
                document.getElementById("favoriteName").value
              )
            }
          >
            Add to favorites
          </button>
        </div>
        <label style={textColor2} className="helvet" htmlFor="favoriteName">
          New palette name
        </label>
        <input type="text" id="favoriteName"></input>
        <label style={textColor2} className="helvet" htmlFor="removeName">
          Remove existing palette
        </label>
        <input type="text" id="removeName"></input>
        <button
          style={buttonStyle}
          onClick={() =>
            removeFromFavorites(document.getElementById("removeName").value)
          }
        >
          Remove from favorites
        </button>
      </div>
    </div>
  );
}

export default List;
