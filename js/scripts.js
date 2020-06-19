// Business Logic


function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings;
  
}

let anchovy = {
  name: "anchovy",
  price: 3.00

}

let artichoke = {
  name: "artichoke",
  price: 4.00
}

let extraCheese = {
  name: "cheese",
  price: 5.00
}

Pizza.prototype.orderTotal

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const customerName = $("input#customerName").val();
    const phoneNumber = $("input#phoneNumber").val();
  })
})
