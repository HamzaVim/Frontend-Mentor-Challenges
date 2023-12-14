const menuButt = document.getElementById("menu");
const menuImage = document.getElementById("menu__image");
const menuBg = document.getElementById("menu__bg");
const nav = document.querySelector(".header__nav");

menuButt.addEventListener("click", () => {
  const imgSrc = menuImage.getAttribute("src");

  if (imgSrc == "/images/icon-hamburger.svg") {
    menuImage.setAttribute("src", "/images/icon-close.svg");

    menuImage.setAttribute("width", "18");
    menuImage.setAttribute("height", "19");
    menuBg.dataset.menu = "open";
    nav.dataset.menu = "open";
  } else {
    menuImage.setAttribute("src", "/images/icon-hamburger.svg");

    menuImage.setAttribute("width", "24");
    menuImage.setAttribute("height", "11");
    menuBg.dataset.menu = "close";
    nav.dataset.menu = "close";
  }
});
