// ----------------------------------
// CHANGE NAVBAR TO BLACK ON SCROLL
// ----------------------------------

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "";
  }
});

// ----------------------------------
// PIZZA OF A DAY
// ----------------------------------

const pizzaDiscount = {
  1: {
    name: "Margherita",
    price30: "12",
    price50: "23",
    price60: "29",
  },
  2: {
    name: "Z szynką",
    price30: "14",
    price50: "27",
    price60: "34",
  },
  3: {
    name: "Wegetariańska",
    price30: "17",
    price50: "30",
    price60: "36",
  },
  4: {
    name: "Capricciosa",
    price30: "15",
    price50: "30",
    price60: "36",
  },
  5: {
    name: "Hawajska",
    price30: "15",
    price50: "30",
    price60: "36",
  },
  6: {
    name: "Pieczarkowa",
    price30: "14",
    price50: "27",
    price60: "34",
  },
  7: {
    name: "Wiejska",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  8: {
    name: "Grillowany kurczak",
    price30: "15",
    price50: "30",
    price60: "36",
  },
  9: {
    name: "Włoska",
    price30: "16",
    price50: "31",
    price60: "38",
  },
  10: {
    name: "Ogórkowa",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  11: {
    name: "Kebabowa",
    price30: "16",
    price50: "31",
    price60: "38",
  },
  12: {
    name: "Meksykańska",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  13: {
    name: "Piekielna",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  14: {
    name: "Szpinakowa",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  15: {
    name: "Serowa",
    price30: "16",
    price50: "31",
    price60: "38",
  },
  16: {
    name: "Amerykańska",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  17: {
    name: "Kurczak słodki chilli",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  18: {
    name: "Wiosenna",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  19: {
    name: "Gangsterska",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  20: {
    name: "Rzymska",
    price30: "15",
    price50: "30",
    price60: "36",
  },
  21: {
    name: "Brokułowa",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  22: {
    name: "Z owocami morza",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  23: {
    name: "Mięsna uczta",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  24: {
    name: "Kurczak na Hawajach",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  25: {
    name: "Pepperoni",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  26: {
    name: "Kurczak BBQ",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  27: {
    name: "Parmeńska",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  28: {
    name: "Góralska",
    price30: "19",
    price50: "36",
    price60: "42",
  },
  29: {
    name: "Capricciosa",
    price30: "15",
    price50: "30",
    price60: "36",
  },
  30: {
    name: "Wiejska",
    price30: "17",
    price50: "32",
    price60: "41",
  },
  31: {
    name: "Mięsna uczta",
    price30: "19",
    price50: "36",
    price60: "42",
  },
};

const today = String(new Date().getDate());
const discountDiv = document.querySelector(".currentDiscounts");
const todaysDiscount = document.createElement("div");

for (let i = 1; i <= Object.keys(pizzaDiscount).length; i++) {
  if (today == i) {
    todaysDiscount.innerHTML = `${pizzaDiscount[i]["name"]}, ${pizzaDiscount[i]["price30"]}, ${pizzaDiscount[i]["price50"]}, ${pizzaDiscount[i]["price60"]} `;
  }
}
console.log("Today is: " + today);

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

console.log(pizzaDiscount);
