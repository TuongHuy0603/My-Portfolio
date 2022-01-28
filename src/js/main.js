new WOW().init();

const getElementByID = (id) => document.getElementById(id);
const queryElement = (element) => document.querySelector(element);
const queryElementAll = (element) => document.querySelectorAll(element);

queryElement(".social__menu").onclick = () => {
  getElementByID("social__link").classList.toggle("show");
};

window.onscroll = () => {
  const offset = window.pageYOffset;
  if (offset > 10) {
    getElementByID("header").classList.add("header__on");
    getElementByID("social__link").classList.remove("show");
  } else {
    getElementByID("header").classList.remove("header__on");
    getElementByID("social__link").classList.add("show");
  }
};
queryElementAll(".project").forEach((element) => {
  element.onclick = () => {
    element.classList.add("active");
  };
});
