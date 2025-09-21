document.getElementById("triangle-btn").addEventListener("click", function() {
  const text = document.getElementById("toggle-text");
  if (text.style.display === "none") {
    text.style.display = "inline";
  } else {
    text.style.display = "none";
  }
});
