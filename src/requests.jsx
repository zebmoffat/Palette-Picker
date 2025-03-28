const API_URL = "https://palette-server-133568887555.us-central1.run.app/api/";

export function postPalette(palette, getGlobalPalettes, setGlobalPalettes) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ colors: palette }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Palette added successfully!");
        getGlobalPalettes(setGlobalPalettes)
      } else {
        console.error("Error adding palette");
      }
    })
    .catch((error) => console.error("Network error:", error));
}

export function getGlobalPalettes(setGlobalPalettes) {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json(); // Return the JSON promise
    })
    .then((data) => {
      setGlobalPalettes(data);
    })
    .catch((error) => console.log("Error fetching palette:", error));

  return;
}
