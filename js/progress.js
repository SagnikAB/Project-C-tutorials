function markComplete(topic) {
  localStorage.setItem(topic, "done");
  alert("Marked as Completed!");
}

function checkProgress(topic) {
  return localStorage.getItem(topic) === "done";
}
