const toggle = document.getElementById("themeToggle");

function applyTheme(){
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }
}

applyTheme();

if(toggle){
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};
}
