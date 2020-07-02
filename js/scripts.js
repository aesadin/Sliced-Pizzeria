// Business Logic


function Pizza(size, toppings) {
  this.size = size,
  this.cost = 0,
  this.toppings = toppings; 
};




Pizza.prototype.getToppingsCost = function() {
  if (this.toppings.length === 1) {
    this.cost += 3;
  } else if (this.toppings.length === 2) {
      this.cost += 6;
  } else if (this.toppings.length === 3) {
      this.cost += 9;
  } else {
      this.cost === 0;
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

    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });

    const pizza = new Pizza(size, toppings);
    pizza.getToppingsCost();
    const sizeCost = pizza.getTotal(size).toFixed(2);
    
    

    $("h5").html(sizeCost);
    $("#displayTotal").show();

    $("#displayPizza").show();
    $("#displayPizza").html(size + "<br>" + toppings.join(", "));

  });
});



