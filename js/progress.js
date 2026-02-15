/* MARK COMPLETE */
function markComplete(topic){
  localStorage.setItem("progress_" + topic, "done");
  updateProgressUI(topic);
}

/* CHECK STATUS */
function isCompleted(topic){
  return localStorage.getItem("progress_" + topic) === "done";
}

/* UPDATE BUTTON UI */
function updateProgressUI(topic){
  const btn = document.getElementById("completeBtn");
  if(!btn) return;

  if(isCompleted(topic)){
    btn.innerText = "Completed ✓";
    btn.disabled = true;
  }
}

/* AUTO CHECK ON PAGE LOAD */
function initProgress(topic){
  if(isCompleted(topic)){
    updateProgressUI(topic);
  }
}
