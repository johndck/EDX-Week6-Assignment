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
let questionCounter;

function startQuiz() {
  startDisplay.classList.remove("start");
  startDisplay.classList.add("hide");
  questions.classList.remove("hide");
  questionCounter = 0;
  getQuestions();
}

function getQuestions() {
  do {
    let questionText = quizQuestions[questionCounter].question;
    questionTitle.textContent = questionText;
    let choicesOptions = quizQuestions[questionCounter].choices;
    for (let choice of choicesOptions) {
      const option = document.createElement("button");
      //option.classList.add("choices");
      option.textContent = choice;
      option.classList.add("answerOptions");
      option.addEventListener("click", checkOption);
      answerOptions.appendChild(option);
    }
  } while (questionCounter > quizQuestions.length);
}

startButton.addEventListener("click", startQuiz);

function checkOption() {
  questionCounter++;

  // remove previous buttons from the dom

  let children = answerOptions.querySelectorAll(".answerOptions");
  for (let i = children.length - 1; i >= 0; i--) {
    children[i].remove();
  }
  getQuestions();
}
