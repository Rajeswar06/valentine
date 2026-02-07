const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const noMessages = [
  "Are you sure?",
  "Think again!",
  "Really?",
  "Please reconsider!",
  "Don't be so cold!",
  "Give it another thought!",
  "Maybe yes?",
  "One more chance?",
];
let lastNoMessageIndex = -1;

const moveNoButton = (event) => {
  if (event) {
    event.preventDefault();
  }
  const maxX = Math.max(0, questionContainer.clientWidth - noBtn.offsetWidth);
  const maxY = Math.max(0, questionContainer.clientHeight - noBtn.offsetHeight);
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  let nextIndex = Math.floor(Math.random() * noMessages.length);
  if (nextIndex === lastNoMessageIndex) {
    nextIndex = (nextIndex + 1) % noMessages.length;
  }
  lastNoMessageIndex = nextIndex;
  noBtn.textContent = noMessages[nextIndex];
};

// /change the postion of no button
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("pointerdown", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
noBtn.addEventListener("click", moveNoButton);

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
