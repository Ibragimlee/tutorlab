document.addEventListener("click", (e) => {
  if (e.target.classList.contains("snackback_close")) {
    e.target.parentElement.classList.remove("active");
  }
});
