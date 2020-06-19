// Business Logic


function Pizza(size, topping1, topping2, topping3) {
  this.size = [small, medium, large],
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
  
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const size = 
    const inputtedTopping1 =
    const inputtedTopping2 = 
    const inputteTopping3 =
    let newPizza = new Pizza(inputtedTopping1, inputtedTopping2, inputtedTopping3)

    

    const customerName = $("input#customerName").val();
    const phoneNumber = $("input#phoneNumber").val();

    $("h5").html(customerName);
    $("h5").append( ", " + phoneNumber);
  })
})


/*$("input:checkbox[name=pizzaSize]:checked").each(function() {
  const whatSizePizza = $(this).val();
  $('.pizzaOrder').append(whatSizePizza + "<br>");
});
$("input:checkbox[name=toppings]:checked").each(function() {
  const whichToppings = $(this).val();
  $('.pizzaOrder').append(whichToppings + "<br>");
});*/
