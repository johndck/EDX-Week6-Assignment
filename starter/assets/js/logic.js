// inital check everything is working:

console.log(quizQuestions.length);

for (let i = 0; i < quizQuestions.length; i++) {
  let currentQuestionNo = i + 1;
  console.log(`${currentQuestionNo} = ${quizQuestions[i].question}`);
}

const startDisplay = document.querySelector("#start-screen");
const startButton = document.querySelector("#start");
const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const answerOptions = document.querySelector("#choices");
const endQuiz = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const playerScore = document.querySelector("#initials");
const storeScoreButton = document.querySelector("#submit");
let questionCounter;
let choiceAnswer;
let quizScore;

function startQuiz() {
  startDisplay.classList.remove("start");
  startDisplay.classList.add("hide");
  questions.classList.remove("hide");
  questionCounter = 0;
  quizScore = 0;
  getQuestions();
}

function getQuestions() {
  if (questionCounter === quizQuestions.length) {
    questions.classList.add("hide");
    endQuiz.classList.remove("hide");
    finalScore.textContent = quizScore;
    return;
  }

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

  // Add logic to deal with end of questions
  // Add logic to deal with time running out
}

startButton.addEventListener("click", startQuiz);

function checkOption() {
  questionCounter++;
  let selection = this.dataset.answerKey;
  // Compare selected answers to the correct answer

  if (parseInt(selection) === parseInt(choiceAnswer)) {
    quizScore += 5;
    console.log(quizScore);
  } else {
    alert("time penalty will be added in here");
  }

  // remove previous buttons from the dom

  let children = answerOptions.querySelectorAll(".answerOptions");
  for (let i = children.length - 1; i >= 0; i--) {
    children[i].remove();

    // Add logic to display result of the selection
    // Add logic to calculate score
  }
  getQuestions();
}

// Store scores into local storage

storeScoreButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Do scores exist?

  let doScoresExist = JSON.parse(localStorage.getItem("codeQuizScore"));
  alert(`${doScoresExist}`);

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

  window.location.href = "/starter/highscores.html";
});
