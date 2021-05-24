// Add general error event to formGroup input~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if (document.querySelector(".form_group")) {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("form_group_input")) {
      e.target.parentElement.classList.remove("error");
      // e.target.parentElement.classList.remove("success");
      e.target.addEventListener("blur", (event) => {
        let target = event.target,
          value = target.value,
          min = target.getAttribute("minlength"),
          max = target.getAttribute("maxlength");
        if (event.target.hasAttribute("required")) {
          let funcReturn = validateInput(value, min, max);

          if (funcReturn == false) {
            target.parentElement.classList.add("error");
            target.parentElement.classList.remove("success");
          } else {
            target.parentElement.classList.remove("error");
            // target.parentElement.classList.add("success");
          }
        }
      });
    }
  });

  function validateInput(value, min, max) {
    if (value.toString().length < min || value.toString().length > max) {
      return false;
    } else if (value.toString().length > min && value.toString().length < max) {
      return true;
    }
  }
}
// Add general error event to formGroup input~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Add loading to buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.classList.add("loading");
  }
});
// Add loading to buttons

// show Input Pass ~~~~~~~~~~~~~~~~~~~~
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("show_pass_btn")) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    let input = e.target.parentElement.querySelector("input"),
      btn = e.target;
    if (input.getAttribute("type") == "text") {
      input.setAttribute("type", "password");
      btn.dataset.status = "hide";
    } else if (input.getAttribute("type") == "password") {
      input.setAttribute("type", "text");
      btn.dataset.status = "show";
    }
  }
});
// show Input Pass ~~~~~~~~~~~~~~~~~~~
