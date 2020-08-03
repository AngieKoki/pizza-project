//Order Now button
$(document).ready(function(){
    $('.orderNow').click(function(){
        $('.orderForm').toggle();
    //     $('.orderNow').slideUp();
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
        function delivery() {
            var pizzaDelivery = document.getElementById("delivery").value;
            return parseInt(pizzaDelivery);
        }
    
        function Order(size, crust, topping, quantity, delivery) {
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
          this.newDelivery = delivery;
          
        }
    
        var userInput = new Order(size(), crust(), topping(), number(), delivery());
    
        //a variable to store the total expenditure of the user
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping) *
            userInput.newQuantity;
    
        //prompts for the user
        if(pizzaDelivery===2){
            alert(userInput());
            alert('Your total is: ' + totalCost);
            alert('Enjoy your Pizza!')
        }
        else if(pizzaDelivery===1){
            var location=prompt('Input delivery location')
            alert('Your pizza will be delivered to ' + location)
            alert('Your total is: ' + totalCost);
            alert('Thank you! Your order will arrive in an hour')
        }
        //a method to reset the form after all operations have been completed
        // $("#pizzaForm").reset();
    
        event.preventDefault();
      });
});

// //Order Details 
// function Order (size,crust,toppings) {
//     this.size= size;
//     this.crust= crust;
//     this.toppings=toppings;
// };
// Order.prototype.results= function(){
//     return 'Your order is a ' + this.size + ' with a ' + this.crust + ' and ' + this.toppings + ' for your toppings.'
// };

// //Total Amount
// function Total(price,crust,toppings,quantity,delivery){
//     this.price=price;
//     this.crust=crust;
//     this.toppings=toppings;
//     this.quantity=quantity;
//     this.delivery=delivery;
// };
// Total.prototype.finalTotal=function(){
//     return (this.price + this.crust + this.toppings +this.delivery)*this.quantity;
// };

// //BUSINESS LOGIC

// var sizePrices=[300,400,500];

// //Crust Price 
// var crustPrices=[100,150,50];
// var crustNames=['crispy','stuffed','glutenFree'];

// //Topping Prices
// var toppingPrices =[50, 50, 70, 70];
// var toppingNames=['olives', 'pineapples','extracheese', 'mushrooms'];

// //Delivery Price
// var deliveryPrices=[0,300];

// Order form
// $(document).ready(function(){
//     $('form#pizzaform').submit(function(event){
//         event.preventDefault();
//         var pizzaSize = parseInt($('#sizePizza').val());
//         var pizzaQuantity= parseInt($('#quantity').val());
//         var pizzaDelivery=parseInt($('#delivery').val());
//         var pizzaToppings=parseInt($('#topping').val());
//         var pizzaTop=$('#topping').val();
//         var pizzaCrust=parseInt($('#crust').val());
//         var sizeCost=sizePrices[pizzaSize-1]
//         var deliveryCost= deliveryPrices[pizzaDelivery-1];
//         var toppingsCost=pizzaToppings[toppingPrice-1];
//         var crustCost= crustPrices[pizzaCrust-1];
//         var topNames= toppingNames[pizzaTop-1];
//         var crustName=crustNames[pizzaCrust-1];
        
//         newOrder = new Order(pizzaSize, crustName, topNames);
//         newTotal = new Total(sizeCost,toppingsCost,crustCost, pizzaQuantity,deliveryCost)
            
//         if(pizzaDelivery===1){
//             alert(newOrder.results());
//             alert('Your total is: ' + newTotal.finalTotal());
//             alert('Enjoy your Pizza!')
//         }
//         else if(pizzaDelivery===2){
//             var location=prompt('Input delivery location')
//             alert('Your pizza will be delivered to ' + location)
//             alert('Your total is: ' + newTotal.finalTotal());
//             alert('Thank you! Your order will arrive in an hour')
//         }
//     });
// });
// $(document).ready(function() {
//       $('#pizzaform').submit(function(event) {
//         function size() {
//           var pizzaSize = document.getElementById("sizePizza").value;
//           return parseInt(pizzaSize);
//         }
//         function crust() {
//           var pizzaCrust = document.getElementById("crust").value;
//           return parseInt(pizzaCrust);
//         }
//         function topping() {
//           var pizzaTopping = document.getElementById("topping").value;
//           return parseInt(pizzaTopping);
//         }
//         function number() {
//           var pizzaNumber = document.getElementById("quantity").value;
//           return parseInt(pizzaNumber);
//         }
//         function delivery() {
//             var pizzaDelivery = document.getElementById("delivery").value;
//             return parseInt(pizzaDelivery);
//         }
    
//         function Order(size, crust, topping, quantity, delivery) {
//           this.newSize = size;
//           this.newCrust = crust;
//           this.newTopping = topping;
//           this.newQuantity = quantity;
//           this.newDelivery = delivery;
          
//         }
    
//         var userInput = new Order(size(), crust(), topping(), number(), delivery());
    
//         //a variable to store the total expenditure of the user
//         var totalCost =
//           (userInput.newSize +
//             userInput.newCrust +
//             userInput.newTopping) *
//             userInput.newQuantity;
    
//         //prompts for the user
//         if(pizzaDelivery===2){
//             alert(userInput());
//             alert('Your total is: ' + totalCost);
//             alert('Enjoy your Pizza!')
//         }
//         else if(pizzaDelivery===1){
//             var location=prompt('Input delivery location')
//             alert('Your pizza will be delivered to ' + location)
//             alert('Your total is: ' + totalCost);
//             alert('Thank you! Your order will arrive in an hour')
//         }
//         //a method to reset the form after all operations have been completed
//         // $("#pizzaForm").reset();
    
//         event.preventDefault();
//       });
//     });

