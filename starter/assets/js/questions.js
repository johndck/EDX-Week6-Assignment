const quizQuestions = [
  {
    question:
      "Which of the following is the best way to declare a variable in JavaScript?",
    choices: ["var name = ", "let name = ", "const name = ", "int name = "],
    correctAnswer: 1,
  },

  {
    question:
      "What does the following JavaScript function do - return num * 2 ?",
    choices: [
      "Prints the double of a given number",
      "Assigns a number to a variable",
      "Changes it number to double its value",
      "Returns double the number",
    ],
    correctAnswer: 3,
  },

  {
    question:
      "Which of the following elements are typically used for formatting text in HTML?",
    choices: ["<div>", "<span>", "<img>", "<link>"],
    correctAnswer: 1,
  },
];

/*
console.log(quizQuestions.length);

for (let i = 0; i < quizQuestions.length; i++) {
  let currentQuestionNo = i + 1;
  console.log(`${currentQuestionNo} = ${quizQuestions[i].question}`);
}

// Get question & options

// Start

// currentQuestionNo = 0;


Start quiz

- set the Score to 0
- start the timer
- display the 1st question
- display the possible answers as buttons
- select answer
- show result
- update score (if correct)
- reduce time (if wrong)
- show next question




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


  let displayQuestion = true;

  for (let i = 0; i < quizQuestions.length && displayQuestion; i++) {
    // immediately stop the loop after 1st iteration

    let questionText = quizQuestions[i].question;
    questionTitle.textContent = questionText;
    let choicesOptions = quizQuestions[i].choices;
    for (let choice of choicesOptions) {
      const option = document.createElement("button");
      //option.classList.add("choices");
      option.textContent = choice;
      option.addEventListener("click", checkOption);
      answerOptions.appendChild(option);
    }
    displayQuestion = false;
  }
}



do this....

for each element in the array

Get the question, options & answer.
Display the question, option buttons








while all questions asked and you have enough time

while questionsAsked <= quizQuestions.length

*/
