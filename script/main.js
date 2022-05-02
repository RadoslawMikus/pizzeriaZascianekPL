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
};

const today = String(new Date().getDate());
const discountDiv = document.querySelector(".currentDiscounts");
const todaysDiscount = document.createElement("div");

for (let i = 1; i <= Object.keys(pizzaDiscount).length; i++) {
  if (today == i) {
    todaysDiscount.innerHTML = `${pizzaDiscount[i]["name"]}, ${pizzaDiscount[i]["price30"]}, ${pizzaDiscount[i]["price50"]}, ${pizzaDiscount[i]["price60"]} `;
    console.log(pizzaDiscount[i]["name"]);
    console.log(pizzaDiscount[i]["price30"] + " zł");
    console.log(pizzaDiscount[i]["price50"] + " zł");
    console.log(pizzaDiscount[i]["price60"] + " zł");
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
