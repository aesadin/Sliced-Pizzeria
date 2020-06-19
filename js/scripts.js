// Business Logic

function Order(pizza, price) {
  this.pizza = [],
  this.price = price;
}

function Pizza(size, toppings, type) {
  this.size = size,
  this.toppings = toppings,
  this.type = type;
}

let vegPizza = new Pizza (["sm", "md", "lg"], ["garlic", "mushroom", "spinach"], ["V", "GF", "Reg"]);

let meatPizza = new Pizza (["sm", "md", "lg"], ["sausage", "pepperoni", "ham"], ["V", "GF", "Reg"]);

let classicPizza = new Pizza (["sm", "md", "lg"], ["mozzarella", "basil", "tomato"], ["V", "GF", "Reg"];)