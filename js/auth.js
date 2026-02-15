/* REGISTER */
function register(){
  const user = regUser.value.trim();
  const pass = regPass.value.trim();

  if(!user || !pass){
    alert("Fill all fields");
    return;
  }

  if(localStorage.getItem("user_" + user)){
    alert("Username already exists");
    return;
  }

  const data = { password: pass };
  localStorage.setItem("user_" + user, JSON.stringify(data));

  alert("Registered Successfully!");
  location = "login.html";
}

/* LOGIN */
function login(){
  const user = logUser.value.trim();
  const pass = logPass.value.trim();

  const stored = localStorage.getItem("user_" + user);

  if(!stored){
    alert("User not found");
    return;
  }

  const parsed = JSON.parse(stored);

  if(parsed.password === pass){
    localStorage.setItem("loggedUser", user);
    location = "index.html";
  } else {
    alert("Wrong credentials");
  }
}

/* LOGOUT */
function logout(){
  localStorage.removeItem("loggedUser");
  location = "login.html";
}

/* AUTH CHECK */
function checkAuth(){
  if(!localStorage.getItem("loggedUser")){
    location = "login.html";
  }
}

/* AUTO REDIRECT IF ALREADY LOGGED IN */
function redirectIfLoggedIn(){
  if(localStorage.getItem("loggedUser")){
    location = "index.html";
  }
}
