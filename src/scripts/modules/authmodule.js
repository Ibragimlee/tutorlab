if (document.querySelector("#reset_pass_form")) {
  const form = document.querySelector("#reset_pass_form"),
    form_submit = form.querySelector("button");

  form_submit.addEventListener("click", (e) => {
    // e.preventDefault();
    // form.submit();

    document.querySelector(".snackback").classList.add("active");
  });
}

if (document.querySelector("#set_pass_form")) {
  const form = document.querySelector("#set_pass_form"),
    submit = form.querySelector("#set_pass_submit"),
    pass1 = form.querySelector(`input[name='pass1']`),
    pass2 = form.querySelector('input[name="pass2"]');

  console.log(pass1, pass2, submit);

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (pass1.value.length >= 8 && pass1.value == pass2.value) {
      form.submit();
    } else {
      setTimeout(() => {
        submit.classList.remove("loading");
      }, 200);
      if (pass1.value.length < 8) {
        pass1.parentElement.classList.add("error");
      }
      if (pass2.value.length < 8) {
        pass2.parentElement.classList.add("error");
      }
      if (pass1.value != pass2.value) {
        pass2.parentElement.classList.add("error");
      }
    }
  });
}
