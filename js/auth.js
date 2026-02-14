function register(){
localStorage.setItem(regUser.value,regPass.value);
alert("Registered!");
location="login.html";
}
function login(){
if(localStorage.getItem(logUser.value)==logPass.value){
localStorage.setItem("user",logUser.value);
location="index.html";
}else alert("Wrong credentials");
}
function logout(){
localStorage.removeItem("user");
location="login.html";
}
function checkAuth(){
if(!localStorage.getItem("user")) location="login.html";
}
