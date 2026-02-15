window.addEventListener("load", () => {
  // Fade in body
  document.body.classList.add("fade");

  // Auto focus first input if present
  const firstInput = document.querySelector("input");
  if(firstInput){
    firstInput.focus();
  }

  // Scroll to top on page load
  window.scrollTo(0, 0);
});
