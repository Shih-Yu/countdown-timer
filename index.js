// Create a class
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Listen for click event on the start button
    this.startButton.addEventListener("click", this.start);
    // Listen for click event on the start button
    this.pauseButton.addEventListener("click", this.pause);
  }
  // Start method for Timer 
  start() {
    console.log("Start Timer");
  }
  // Pause method for Timer
  pause() {
    console.log("Pause Timer");
  }
}

// Assigning the contructor arguments to DOM elements
const durationInput = document.querySelector("#duration");
const startButton= document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// ☝🏼 Create new instance of timer and pass in elements from above 
const timer = new Timer(durationInput, startButton, pauseButton)