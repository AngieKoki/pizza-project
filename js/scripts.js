//Order Now button
$(document).ready(function(){
    $('.orderNow').click(function(){
        $('.orderForm').toggle();
        $('.orderNow').slideUp();
    });
    $('#pizzaform').submit(function(event) {
      event.preventDefault();
        function size() {
          var pizzaSize = document.getElementById("sizePizza").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
        }
  
        function Order(size, crust, topping, quantity, delivery) {
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
          this.newDelivery = delivery;
          
        }
    
        var userInput = new Order(size(), crust(), topping(), number());
    
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping) *
            userInput.newQuantity;


        var pizzaDelivery = parseInt(document.getElementById("delivery").value);
        if(pizzaDelivery===0){
          alert('Your total is: ' + totalCost);
          alert('Enjoy your Pizza!')
      }
        else if(pizzaDelivery===300){
          var location=prompt('Input delivery location')
          alert('Your pizza will be delivered to ' + location)
          alert('Your total is: ' + totalCost);
          alert('Thank you! Your order will arrive in an hour')
      }
        return parseInt(pizzaDelivery);
          
        //a method to reset the form after all operations have been completed
        // $("#pizzaForm").reset();
    
      });
});

