// Business Logic
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = [],
  this.cost = cost;
  
}


Pizza.prototype.toppings = function(toppingsArray) {
  let cost = 0
  if (toppingsArray.length === 1) {
    this.cost += 3;
  } else if (toppingsArray.length === 2) {
      this.cost += 6;
  } else {
      this.cost += 9;
  }
  return cost
} 

Pizza.prototype.getToppingsCost = function(toppings) {
  let cost = 0;
  for (const elemtent in toppings) {
    this.cost =+ 3
  } return cost
}



Pizza.prototype.getTotal = function(toppings) {
  let cost = 0;
  if (this.size === "small") {
    this.cost === (toppings + 14.99)
  } else if (this.size === "medium") {
    this.cost === (toppings + 18.99 )
  } else {
    this.cost ===(toppings + 22.99)
  }
  return cost;
}



// UI Logic


$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const inputSize = $("input:radio[name=size]:checked").val();

    $("#displayToppings").show();

    $("#displayToppings").append(inputSize + "<br>");

    
    $("input:checkbox[name=topping]:checked").each(function() {
      const toppings = $(this).val();
      $("#displayToppings").append(toppings + "<br>");
      console.log(toppings.getToppingsCost)
    });

    $("h5").html()
    $("#displayTotal").show();
    
  })
})



