function goBack(){
  if(document.referrer && document.referrer !== window.location.href){
    window.history.back();
  } else {
    // fallback page
    if(window.location.pathname.includes("topics")){
      window.location.href = "../topics.html";
    } else {
      window.location.href = "index.html";
    }
  }
}
