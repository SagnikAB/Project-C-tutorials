const searchBar = document.getElementById("searchBar");

if(searchBar){
  searchBar.addEventListener("keyup", function () {
    const input = this.value.toLowerCase();

    // NAV LINKS
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(input)
        ? "inline-block"
        : "none";
    });

    // TOPIC BUTTONS / GRID LINKS
    const topicLinks = document.querySelectorAll(".topicGrid a, .btn");

    topicLinks.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(input)
        ? "inline-block"
        : "none";
    });
  });
}
