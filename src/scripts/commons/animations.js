const obesrver_options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const object = entry.target;
      object.classList.add("visible");
      observer.unobserve(object);
    }
  });
}, obesrver_options);

// OBSERVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if (document.querySelector(".anim")) {
  let cards = document.querySelectorAll(".anim");
  cards.forEach((card) => {
    observer.observe(card);
  });
}
