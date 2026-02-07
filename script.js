const questionContainer = document.querySelector(".question-container");
const valentineContainer = document.querySelector(".valentine-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const valentineYesBtn = document.querySelector(".js-valentine-yes-btn");
const noButtons = document.querySelectorAll(".js-no-btn");
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
  const target = event.currentTarget;
  const container = target.closest(".container");
  if (!container) {
    return;
  }
  const maxX = Math.max(0, container.clientWidth - target.offsetWidth);
  const maxY = Math.max(0, container.clientHeight - target.offsetHeight);
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  target.style.left = `${newX}px`;
  target.style.top = `${newY}px`;

  let nextIndex = Math.floor(Math.random() * noMessages.length);
  if (nextIndex === lastNoMessageIndex) {
    nextIndex = (nextIndex + 1) % noMessages.length;
  }
  lastNoMessageIndex = nextIndex;
  target.textContent = noMessages[nextIndex];
};

// /change the postion of no button
noButtons.forEach((button) => {
  button.addEventListener("mouseover", moveNoButton);
  button.addEventListener("pointerdown", moveNoButton);
  button.addEventListener("touchstart", moveNoButton, { passive: false });
  button.addEventListener("click", moveNoButton);
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  valentineContainer.style.display = "inherit";
});

valentineYesBtn.addEventListener("click", () => {
  valentineContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
