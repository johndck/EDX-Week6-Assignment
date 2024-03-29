// Pull in all the dom element required:

const startDisplay = document.querySelector("#start-screen");
const startButton = document.querySelector("#start");
const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const answerOptions = document.querySelector("#choices");
const endQuiz = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const playerScore = document.querySelector("#initials");
const storeScoreButton = document.querySelector("#submit");
const counterDisplay = document.querySelector("#time");
const finalTitle = document.querySelector("#final-title");
const feedbackSection = document.querySelector("#feedback");

// Create some global variables used in the functions:

let questionCounter;
let choiceAnswer;
let quizScore;

// For now with 3 questions the timer is set for 30 seconds:

let timeRemaining = 30;

// Key functions for the quiz

// Start the quiz - this is called by the start quiz button.

function startQuiz() {
  startDisplay.classList.remove("start");
  startDisplay.classList.add("hide");
  questions.classList.remove("hide");
  questionCounter = 0;
  quizScore = 0;
  countdownTimer();
  getQuestions();
}

// Create countdown timer

function countdownTimer() {
  const downer = setInterval(function () {
    counterDisplay.textContent = timeRemaining;
    timeRemaining--;

    if (timeRemaining === 0) {
      clearInterval(downer);
      questions.classList.add("hide");
      endQuiz.classList.remove("hide");
      finalScore.textContent = quizScore;
      feedbackSection.classList.add("hide");
      finalTitle.textContent = "Out of Time!";
      counterDisplay.textContent = 0;
    }
  }, 1000);
}

// Run the question cycle

function getQuestions() {
  if (questionCounter === quizQuestions.length) {
    questions.classList.add("hide");
    endQuiz.classList.remove("hide");
    feedbackSection.classList.add("hide");
    finalScore.textContent = quizScore;
    return;
  }

  // Using the do while loop so that it runs once - this is an area for improvement with tutor.

  do {
    let questionText = quizQuestions[questionCounter].question;
    questionTitle.textContent = questionText;
    let choicesOptions = quizQuestions[questionCounter].choices;
    choiceAnswer = quizQuestions[questionCounter].correctAnswer;

    for (let i = 0; i < choicesOptions.length; i++) {
      const option = document.createElement("button");
      //option.classList.add("choices");
      option.textContent = choicesOptions[i];
      option.classList.add("answerOptions");
      option.addEventListener("click", checkOption);
      option.dataset.answerKey = i;
      answerOptions.appendChild(option);
    }
  } while (questionCounter > quizQuestions.length);
}

// Event listener to start the quiz

startButton.addEventListener("click", startQuiz);

// This function reviews the selected button & temporarily shows the result.

function checkOption() {
  questionCounter++;
  let selection = this.dataset.answerKey;
  // Compare selected answers to the correct answer

  // If correct answer picked:
  if (parseInt(selection) === parseInt(choiceAnswer)) {
    quizScore += 5;
    let children = answerOptions.querySelectorAll(".answerOptions");
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
    feedbackSection.classList.remove("hide");
    feedbackSection.textContent = "Correct answer!";
    // hide feedback after a second
    setTimeout(() => {
      feedbackSection.classList.add("hide");
    }, 1000);
    getQuestions();
    return;

    // Wrong answer picked but over 10 seconds left
  } else if (timeRemaining >= 11) {
    timeRemaining -= 10;

    feedbackSection.classList.remove("hide");
    feedbackSection.textContent = "Wrong answer!";
    // hide feedback after a second

    setTimeout(() => {
      feedbackSection.classList.add("hide");
    }, 1000);
    getQuestions();

    let children = answerOptions.querySelectorAll(".answerOptions");
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
    getQuestions();
    return;

    // 10 seconds left and wrong answer - out of time
  } else {
    timeRemaining = 1;
  }
}

// Store scores into local storage

storeScoreButton.addEventListener("click", function (event) {
  event.preventDefault();

  // make sure the input box is not blank

  if (playerScore.value.length === 0) {
    alert("Please provide your initials to store your score.");
    return;
  }

  // only allow 3 characters - numbers or letters

  if (playerScore.value.length > 3) {
    alert("You can only have 3 characters in your initials");
    playerScore.value = "";
    return;
  }

  // check if there are any scores already in local storage.
  // if not create a score
  // otherwise add to an existing saved score

  let doScoresExist = JSON.parse(localStorage.getItem("codeQuizScore"));

  if (doScoresExist == null) {
    let newQuizScore = JSON.stringify([
      {
        player: playerScore.value,
        score: quizScore,
      },
    ]);
    localStorage.setItem("codeQuizScore", newQuizScore);
  } else {
    let newQuizScore = { player: playerScore.value, score: quizScore };
    doScoresExist.push(newQuizScore);
    let updateScores = JSON.stringify(doScoresExist);
    localStorage.setItem("codeQuizScore", updateScores);
  }

  window.location.href = "highscores.html";
});
