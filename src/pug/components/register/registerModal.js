export function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
if (document.querySelector("section.register_popup")) {
  const modal = document.querySelector("section.register_popup"),
    form = modal.querySelector("#register_form"),
    first_name = form.querySelector("#firstname_inp"),
    last_name = form.querySelector("#lastname_inp"),
    phone = form.querySelector("#phoneNumber_inp"),
    email = form.querySelector("#email_inp"),
    submit = form.querySelector("#sub_reg_form"),
    radios = form.querySelectorAll(".hidden-checkbox"),
    close = document.querySelectorAll(".close_modal_btn"),
    successModal = document.querySelector("section.successfull_reg");
  let radio_selected = false;

  const formData = {
    isParent: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null,
  };

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      radio.parentElement.parentElement.parentElement.classList.remove("error");
      radio_selected = true;

      formData.isParent = radio.value == "true" ? true : false;
    });
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      first_name.validity.valid &&
      last_name.validity.valid &&
      phone.validity.valid &&
      email.validity.valid &&
      radio_selected == true
    ) {
      formData.firstName = first_name.value;
      formData.lastName = last_name.value;
      formData.phoneNumber = phone.value;
      formData.email = email.value;

      const http = new EasyHTTP();
      http
        .postRegister("http://46.254.16.125/api/request/create", formData)
        .then((data) => {
          if (data.status == 200) {
            successModal.classList.add("active");
          } else {
            console.log(data);
          }
        })
        .catch((err) => {
          // errorMessage.innerHTML = err.email[0];
          console.log(err);
        });
    } else {
      if (radio_selected == false) {
        radios[0].parentElement.parentElement.parentElement.classList.add(
          "error"
        );
      }
      if (!first_name.validity.valid) {
        first_name.parentElement.classList.add("error");
      }
      if (!last_name.validity.valid) {
        last_name.parentElement.classList.add("error");
      }
      if (!phone.validity.valid) {
        phone.parentElement.classList.add("error");
      }
      if (!email.validity.valid) {
        email.parentElement.classList.add("error");
      }
    }
  });

  // regexp filter for mobile inputs
  setInputFilter(phone, function (value) {
    return /^\d*\+?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });

  document.querySelectorAll("input").forEach((input, index) => {
    if (input.hasAttribute("id") && input.hasAttribute("required")) {
      input.addEventListener("input", () => {
        if (input.validity.valid || input.value == "") {
          input.parentElement.classList.remove("error");
        }
      });

      input.addEventListener("blur", () => {
        input.validity.valid
          ? input.parentElement.classList.remove("error")
          : input.parentElement.classList.add("error");
      });
    }
  });

  // show modal
  // document.querySelectorAll(".show_register_modal").forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     modal.dataset.status = 1;
  //   });
  // });

  // close.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   modal.dataset.status = 0;
  // });
  // show & close modal
}

export class EasyHTTP {
  // Make an HTTP POST Request
  async postRegister(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${document
          .querySelector("html")
          .getAttribute("lang")}`,
        SecretKey: "@p!TSu5K32HHsv__",
      },
    });

    // const resData = await response.json();
    return response;
  }

  async postSubscribe(url, email) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(email),
      // body: email,
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${document
          .querySelector("html")
          .getAttribute("lang")}`,
        SecretKey: "@p!TSu5K32HHsv__",
      },
    });

    // const resData = await response.json();
    return response;
  }
}
