// Pull JSON data from a .json file and sort animals according to their favorite color. Should return a JSON file with an array of objects. Each object should have the keys of "barn" and "animals". Each barn has a max capacity of 4.

// Example Return:
// [
//   {"barn": "Barn_Green_1", "animals": ["Duck", “Cow”, “Sheep”, “Donkey”]},
//   {"barn": "Barn_Green_2", "animals": ["Goat"]},
//   {"barn": "Barn_Brown_1", "animals": ["Goat", "Duck"]}
// ]

// I decided to start with actually pulling the data from the .json file. I did this because it was a small part of the problem that I was able to do. From here, I just need to work out the actual problem. The last step will be converting back to JSON.

// This is pulling data from .json file and setting it to a variable called animals if successful. If unsuccessful, there will be an error thrown.
const fs = require("fs");
fs.readFile("./animals.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const animals = JSON.parse(jsonString);
    console.log(animals);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
