const scoresList = document.querySelector("#highscores");
const clearScores = document.querySelector("#clear");

if (localStorage.hasOwnProperty("codeQuizScore")) {
  let existingScores = JSON.parse(localStorage.getItem("codeQuizScore"));
  //console.log(existingScores.length);

  for (let i = 0; i < existingScores.length; i++) {
    let quizPlayer = existingScores[i].player;
    let pastQuizScore = existingScores[i].score;
    let li = document.createElement("li");
    li.textContent = `${quizPlayer} ${pastQuizScore}`;
    scoresList.appendChild(li);
  }

  // Clear the local storage

  clearScores.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("codeQuizScore");
    while (scoresList.firstChild) {
      scoresList.removeChild(scoresList.firstChild);
    }
    scoresList.classList;
  });
}
