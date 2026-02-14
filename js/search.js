document.getElementById("searchBar").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(input)
      ? "inline"
      : "none";
  });
});
