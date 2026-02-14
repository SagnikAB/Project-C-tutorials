const quizData = [
  {
    question: "Which keyword allocates memory in C?",
    a: "malloc",
    b: "new",
    c: "alloc",
    correct: "a"
  },
  {
    question: "What is recursion?",
    a: "Loop",
    b: "Function calling itself",
    c: "Pointer",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const q = quizData[currentQuiz];
  document.getElementById("question").innerText = q.question;
  document.getElementById("a_text").innerText = q.a;
  document.getElementById("b_text").innerText = q.b;
}

function submitQuiz(answer) {
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.body.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
}
