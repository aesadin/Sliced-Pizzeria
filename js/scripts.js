// Business Logic


function Pizza(size, topping1, topping2, topping3) {
  this.size = size
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
  
}

function OrderTotal() {
  this.order = []
}

//Pizza.prototype.

// UI Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const customerName = $("input#customerName").val();
    const phoneNumber = $("input#phoneNumber").val();

    $("h5").html(customerName);
    $("h5").append( ", " + phoneNumber);

    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedTopping1 = $("input:radio[name=firstTopping]:checked").val();
    const inputtedTopping2 = $("input:radio[name=secondTopping]:checked").val();
    const inputtedTopping3 = $("input:radio[name=thirdTopping]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2, inputtedTopping3);

    console.log(newPizza)
  })
})



