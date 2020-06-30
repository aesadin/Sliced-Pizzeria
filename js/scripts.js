// Business Logic




function Pizza(size, cost, toppings) {
  this.size = size,
  this.cost = 0,
  this.toppings = ["anchovies", "artichoke", "olives"]; 
};




Pizza.prototype.getToppingsCost = function(toppings) {
  if (toppings.length === 1) {
    this.cost += 3;
  } else if (toppings.length === 2) {
      this.cost += 6;
  } else {
      this.cost += 9;
  }
  return this.cost
}; 




Pizza.prototype.getTotal = function() {
  if (this.size === "small") {
    this.cost += 14.99
  } else if (this.size === "medium") {
    this.cost += 18.99 
  } else {
    this.cost += 22.99
  }
  return this.cost;
};



// UI Logic


$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const size = $("input:radio[name=size]:checked").val();
    const toppings = [];
    const pizza = new Pizza(size, toppings, 0);
    const toppingsCost = pizza.getToppingsCost(toppings);
    const sizeCost = pizza.getTotal(size);

    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
      $("#displayPizza").append(toppings + "<br>");
    });

    $("h5").html(sizeCost);
    $("#displayTotal").show();

    $("#displayPizza").show();
    $("#displayPizza").append(size + "<br>");

  });
});



