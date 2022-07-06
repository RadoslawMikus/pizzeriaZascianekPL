// ----------------------------------
// CHANGE NAVBAR TO BLACK ON SCROLL
// ----------------------------------
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.setAttribute("id", "bg-scroll");
  } else {
    navbar.removeAttribute("id");
  }
});

// ----------------------------------
// PIZZA OF A DAY
// ----------------------------------

const today = String(new Date().getDate());
const discountDiv = document.querySelector(".currentDiscounts");
const todaysDiscount = document.createElement("div");

for (let i = 1; i <= Object.keys(pizzaDiscount).length; i++) {
  if (today == i) {
    todaysDiscount.innerHTML = `<table class="pizzaOfTheDay"><tbody><tr><th colspan="100">Pizza dnia!<div class="pizzaOfTheDayOverlay"></div></th></tr><tr><td>${pizzaDiscount[i]["name"]}</td> <td>${pizzaDiscount[i]["price30"]} zł</td> <td>${pizzaDiscount[i]["price50"]} zł</td> <td>${pizzaDiscount[i]["price60"]} zł</td></tr></tbody></table> `;
  }
}

discountDiv.prepend(todaysDiscount);

// ----------------------------------
// TOGGLE MENU
// ----------------------------------
const buttonPizza = document.querySelector("#buttonPizza");
const buttonOthers = document.querySelector("#buttonOthers");
const menuPizza = document.querySelector(".menuPizza");
const menuOthers = document.querySelector(".menuOthers");

buttonPizza.addEventListener("click", () => {
  menuOthers.classList.add("d-none");
  menuPizza.classList.remove("d-none");
});

buttonOthers.addEventListener("click", () => {
  menuOthers.classList.remove("d-none");
  menuPizza.classList.add("d-none");
});

// ----------------------------------
// SMOOTH SCROLL
// ----------------------------------
document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
  header: "[data-scroll-header]",
});
