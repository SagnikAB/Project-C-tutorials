const quizData = [
{
q:"Which symbol is used to get the address of a variable in C?",
a:"*",
b:"&",
c:"#",
d:"$",
correct:"b"
},
{
q:"Which function is used to allocate memory dynamically?",
a:"printf",
b:"malloc",
c:"scanf",
d:"sizeof",
correct:"b"
},
{
q:"Which loop runs at least once?",
a:"for",
b:"while",
c:"do while",
d:"switch",
correct:"c"
},
{
q:"A pointer stores?",
a:"Value",
b:"Address",
c:"Loop",
d:"String",
correct:"b"
},
{
q:"Which keyword is used to define a constant?",
a:"var",
b:"const",
c:"define",
d:"int",
correct:"b"
},
{
q:"Which header file is required for printf()?",
a:"stdlib.h",
b:"conio.h",
c:"stdio.h",
d:"string.h",
correct:"c"
},
{
q:"Which operator is used to access value at address?",
a:"&",
b:"*",
c:"#",
d:"%",
correct:"b"
},
{
q:"Which data structure uses FIFO?",
a:"Stack",
b:"Queue",
c:"Tree",
d:"Graph",
correct:"b"
},
{
q:"Which keyword stops a loop?",
a:"exit",
b:"stop",
c:"break",
d:"end",
correct:"c"
},
{
q:"Which function releases allocated memory?",
a:"delete",
b:"remove",
c:"free",
d:"clear",
correct:"c"
},
{
q:"Which statement is used for decision making?",
a:"if",
b:"loop",
c:"goto",
d:"scan",
correct:"a"
},
{
q:"Which symbol starts a single-line comment in C?",
a:"//",
b:"##",
c:"**",
d:"--",
correct:"a"
}
];

let i = 0;
let score = 0;

function loadQuiz(){
document.getElementById("question").innerText = quizData[i].q;
document.getElementById("a").innerText = quizData[i].a;
document.getElementById("b").innerText = quizData[i].b;
document.getElementById("c").innerText = quizData[i].c;
document.getElementById("d").innerText = quizData[i].d;
}

loadQuiz();

function submitQuiz(){
let ans = document.querySelector('input[name="opt"]:checked');
if(!ans){
alert("Select an option");
return;
}

if(ans.value === quizData[i].correct) score++;

i++;

if(i < quizData.length){
document.querySelectorAll('input[name="opt"]').forEach(el => el.checked = false);
loadQuiz();
}else{
document.querySelector(".quiz-container").innerHTML =
`<h2>Your Score: ${score}/${quizData.length}</h2>
<button onclick="location.reload()">Retry</button>`;
}
}
