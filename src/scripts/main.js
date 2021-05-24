// import $ from "jquery";

const html = document.querySelector("html");
const body = document.querySelector("body");

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
