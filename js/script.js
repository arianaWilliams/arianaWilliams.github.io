document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var options = {
    // Set the options for the carousel here
  };
  var instances = M.Carousel.init(elems, options);
});

// const wordBank = [
//   "Java",
//   "Python",
//   "C++",
//   "HTML",
//   "CSS",
//   "React",
//   "SQL",
//   "SQLite3",
// ];
// const wordDisplay = document.getElementById("word-display");

// function getRandomWord() {
//   const randomIndex = Math.floor(Math.random() * wordBank.length);
//   return wordBank[randomIndex];
// }

// function showRandomWord() {
//   const randomWord = getRandomWord();
//   wordDisplay.textContent = "Java";
// }

// let intervalId;

// function startRandomWordDisplay() {
//   showRandomWord();
//   intervalId = setInterval(showRandomWord, 3000);
// }

// function stopRandomWordDisplay() {
//   clearInterval(intervalId);
// }

// document.addEventListener("DOMContentLoaded", startRandomWordDisplay);
