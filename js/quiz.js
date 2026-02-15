const quizData = [
{ q:"Which symbol is used to get the address of a variable in C?", a:"*", b:"&", c:"#", d:"$", correct:"b" },
{ q:"Which function is used to allocate memory dynamically?", a:"printf", b:"malloc", c:"scanf", d:"sizeof", correct:"b" },
{ q:"Which loop runs at least once?", a:"for", b:"while", c:"do while", d:"switch", correct:"c" },
{ q:"A pointer stores?", a:"Value", b:"Address", c:"Loop", d:"String", correct:"b" },
{ q:"Which keyword is used to define a constant?", a:"var", b:"const", c:"define", d:"int", correct:"b" },
{ q:"Which header file is required for printf()?", a:"stdlib.h", b:"conio.h", c:"stdio.h", d:"string.h", correct:"c" },
{ q:"Which operator is used to access value at address?", a:"&", b:"*", c:"#", d:"%", correct:"b" },
{ q:"Which data structure uses FIFO?", a:"Stack", b:"Queue", c:"Tree", d:"Graph", correct:"b" },
{ q:"Which keyword stops a loop?", a:"exit", b:"stop", c:"break", d:"end", correct:"c" },
{ q:"Which function releases allocated memory?", a:"delete", b:"remove", c:"free", d:"clear", correct:"c" },
{ q:"Which statement is used for decision making?", a:"if", b:"loop", c:"goto", d:"scan", correct:"a" },
{ q:"Which symbol starts a single-line comment in C?", a:"//", b:"##", c:"**", d:"--", correct:"a" }
];

/* SHUFFLE QUESTIONS */
quizData.sort(() => Math.random() - 0.5);

let i = 0;
let score = 0;

/* LOAD QUIZ */
function loadQuiz(){
  if(!quizData[i]) return;

  document.getElementById("question").innerText =
    `Q${i+1}/${quizData.length}: ${quizData[i].q}`;

  document.getElementById("a").innerText = quizData[i].a;
  document.getElementById("b").innerText = quizData[i].b;
  document.getElementById("c").innerText = quizData[i].c;
  document.getElementById("d").innerText = quizData[i].d;
}

loadQuiz();

/* SUBMIT */
function submitQuiz(){
  const ans = document.querySelector('input[name="opt"]:checked');
  if(!ans){
    alert("Select an option");
    return;
  }

  if(ans.value === quizData[i].correct) score++;

  i++;

  document.querySelectorAll('input[name="opt"]').forEach(el => el.checked = false);

  if(i < quizData.length){
    loadQuiz();
  } else {
    showResult();
  }
}

/* RESULT SCREEN */
function showResult(){
  let msg = "Good Job!";
  if(score === quizData.length) msg = "Perfect Score! 🎉";
  else if(score < quizData.length/2) msg = "Keep Practicing 💪";

  document.querySelector(".quiz-container").innerHTML = `
    <h2>${msg}</h2>
    <p>Your Score: ${score}/${quizData.length}</p>
    <button onclick="location.reload()">Retry Quiz</button>
  `;
}
