// import $ from "jquery";
import { EasyHTTP } from "../pug/components/register/registerModal";
const html = document.querySelector("html");
const body = document.querySelector("body");

if (document.querySelector("section.fullheight_intro")) {
  const advSection = document.querySelector("#advantages");
  const parentBtn = advSection.querySelector("#parentBtn");
  const teacherBtn = advSection.querySelector("#teacherBtn");
  const tabRails = advSection.querySelector("#tab_rails");

  parentBtn.addEventListener("click", (e) => {
    e.preventDefault();

    tabRails.dataset.position = 1;
    teacherBtn.classList.remove("active");
    parentBtn.classList.add("active");
  });

  teacherBtn.addEventListener("click", (e) => {
    e.preventDefault();

    tabRails.dataset.position = 2;
    parentBtn.classList.remove("active");
    teacherBtn.classList.add("active");
  });
}

if (document.querySelector("section#subscribe")) {
  const input = document.querySelector("#subscribe_inp"),
    sub_btn = document.querySelector("#subsribe_btn"),
    modal = document.querySelector("section.successfull_subscribe"),
    close_modal = modal.querySelector(".close_modal_btn");

  close_modal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
  });

  sub_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != null && input.value.length > 6) {
      submitEmail(`${input.value}`);
    } else {
      alert("email düzgün doldurulmayıb");
    }
  });

  const submitEmail = (email) => {
    const http = new EasyHTTP();
    http
      .postSubscribe("http://46.254.16.125/api/request/subscribe", {
        email: email,
      })
      .then((data) => {
        if (data.status == 200) {
          modal.classList.add("active");
        }
      })
      .catch((err) => {
        // errorMessage.innerHTML = err.email[0];
        console.log(err);
      });
  };
}
