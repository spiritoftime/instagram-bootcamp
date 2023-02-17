import classes from "../app.module.css";
const allKeys = [
  "a",
  "w",
  "s",
  "e",
  "d",
  "f",
  "t",
  "g",
  "y",
  "h",
  "u",
  "j",
  "k",
  "o",
  "l",
  "p",
  ";",
];
let audio = new Audio("/tunes/a.wav");

const playTune = (key) => {
  audio.src = `/tunes/${key}.wav`; // passing audio src based on key pressed

  audio.play(); // playing audio
  const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element

  clickedKey.classList.add(classes.active); // adding active class to the clicked key element
  setTimeout(() => {
    // removing active class after 150 ms from the clicked key element
    clickedKey.classList.remove(classes.active);
  }, 150);
};
const pressedKey = (e) => {
  console.log(e.key);
  // if the pressed key is in the allKeys array, only call the playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

const keyListener = (e) => {
  document.addEventListener("keydown", pressedKey);
  const pianoTiles = document.querySelectorAll(".tile");

  pianoTiles.forEach((pianoTile) => {
    pianoTile.addEventListener("click", () => playTune(pianoTile.dataset.key));
  });
};
export default keyListener;
