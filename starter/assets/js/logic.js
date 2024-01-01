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
let questionCounter;
let choiceAnswer;

function startQuiz() {
  startDisplay.classList.remove("start");
  startDisplay.classList.add("hide");
  questions.classList.remove("hide");
  questionCounter = 0;
  getQuestions();
}

function getQuestions() {
  if (questionCounter === quizQuestions.length) {
    alert("score screen");
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
  console.log(`correct answer: ${choiceAnswer}`);
  let selection = this.dataset.answerKey;
  console.log(`selected answer: ${selection}`);

  // remove previous buttons from the dom

  let children = answerOptions.querySelectorAll(".answerOptions");
  for (let i = children.length - 1; i >= 0; i--) {
    children[i].remove();

    // Add logic to display result of the selection
    // Add logic to calculate score
  }
  getQuestions();
}

// copy of for of loop
/*
for (let choice of choicesOptions) {
  const option = document.createElement("button");
  //option.classList.add("choices");
  option.textContent = choice;
  option.classList.add("answerOptions");
  option.addEventListener("click", checkOption);
  option.dataset.list = choiceAnswer;
  answerOptions.appendChild(option);
}
*/
