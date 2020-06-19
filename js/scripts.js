// Business Logic


function Pizza(size, topping1, topping2, topping3) {
  this.size = size
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
  
}



Pizza.prototype.getTotal = function(size) {
  for (i = 0; i < this.size.length; i++)
  if (this.size === "small") {
    return (14.99 + 12.00)
  } else if (this.size === "medium") {
    return (18.99 + 12.00)
  } else {
    return (22.99 + 12.00)
  }
  
}



// UI Logic

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const customerName = $("input#customerName").val();
    const phoneNumber = $("input#phoneNumber").val();

    $("p").html(customerName);
    $("p").append( ", " + phoneNumber);

    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedTopping1 = $("input:radio[name=firstTopping]:checked").val();
    const inputtedTopping2 = $("input:radio[name=secondTopping]:checked").val();
    const inputtedTopping3 = $("input:radio[name=thirdTopping]:checked").val();
    const newPizza = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2, inputtedTopping3);
    $("ul").append("<li>" +inputtedSize+ "</li>" + "<li>" +inputtedTopping1+ "<li>" +inputtedTopping2+ "</li>" + "<li>"+inputtedTopping3+ "</li>")

    
    console.log(Pizza.newPizza[0])
    
  })
})



