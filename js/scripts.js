// Business Logic

function Order(pizza, price, customerNamer, phoneNumber) {
  this.pizza = [],
  this.price = price,
  this.customerName = customerNamer,
  this.phoneNumber = phoneNumber;
}

function Pizza(size, toppings, type) {
  this.size = size,
  this.toppings = toppings,
  this.type = type;
}

let extras = {
  extra1: "cheese",
  extra2: "anchovies",
  extra3: "basil"
} 

let price = {
  smPrice: "$14.99",
  mdPrice: "$18.99",
  lgPrice: "$24.99"
}


let vegPizza = new Pizza (["sm", "md", "lg"], ["garlic", "mushroom", "spinach"], ["V", "GF", "Reg"]);

let meatPizza = new Pizza (["sm", "md", "lg"], ["sausage", "pepperoni", "ham"], ["V", "GF", "Reg"]);

let classicPizza = new Pizza (["sm", "md", "lg"], ["mozzarella", "basil", "tomato"], ["V", "GF", "Reg"])
