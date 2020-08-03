//BUSINESS LOGIC
//Pizza Prices on size
var small= 300;
var medium=400;
var large=500;

//Crust Price 
var crispy=100;
var stuffed=150;
var glutenFree=50;

//Topping Prices
var priceTopping =[];
priceTopping['olives']=50;
priceTopping['pineapples']=50;
priceTopping['extracheese']=70;
priceTopping['mushrooms']=70;

//Delivery Price
var deliveryYes=300;
var deliveryNo=0;

//Order Details
var size='';
var crust='';
var toppings=[];
var howMany='';
var delivery='';
var grandTotal='';


//Total Amount
function total(){
    totalAmt=0;
    totalAmt= size + crust +toppings
}



//FRONT END LOGIC
//Order Now button
$(document).ready(function(){
    $('.orderNow').click(function(){
        $('.orderForm').show();
        $('.orderNow').slideUp();
    });
    $('#checkout').click(function(){
        $('.grandTotal').show();
        $('.orderNow').slideDown();
        $('.orderForm').hide();
    });
});
// Order form

//Size of Pizza Manipulation
function getSize(){    
    if(document.getElementById("small").checked){
        size = small;
    }else if(document.getElementById("medium").checked){
        size = medium;
    }
    else if(document.getElementById("large").checked){
        size = large;
    }
    else{
        alert('Please pick a pizza size');
    }
}
    

//Toppings Manipulation
function getToppings(){
    var toppings = document.getElementsByName('topping[]');
    var selectedToppings = [].filter.call(toppings, function(c) {
      return c.checked;
    }).map((c) => c.value);
    console.log(selectedToppings);
    if(selectedToppings.length <=0) {
        alert('Please select a topping of your choice');
        return [];
    } 
    else {
        toppings=0;
        for(var i=0; i< selectedToppings.length; i++) {
          toppings+=priceTopping[selectedToppings[i]]
    } 
    toppings = parseInt(toppings);
    return selectedToppings;
    }     
  }

//Crust Manipulation
function getCrust(){    
    if(document.getElementById("crispy").checked){
        crust = crispy;
    }else if(document.getElementById("stuffed").checked){
        crust = stuffed;
    }
    else if(document.getElementById("glutenFree").checked){
        crust = glutenFree;
    }
    else{
        alert('Please pick your a pizza crust');
    }
}


// //Multiple Pizza Manipulation
// document.getElementById("addOrder").addEventListener("click", function getOrder(){
//     getSize();
//     getCrust();
//     getToppings();
//     total();
// });

//Delivery Manipulation
// $(document).ready(function(){
//     $('.checkout').click(function(){
        
//     })
// })
// document.getElementById('checkout').addEventListener('click',
// function submit(event){
//     event.preventDefault();
//     var deliveryYes = document.getElementById('yes').value;
//     var deliveryNo = document.getElementById('no').value;
//     var locationForm=document.getElementById('deliveryLocation').value;
    
//     if (deliveryYes ==='Yes'){
//         alert('Cost of delivery is 300/-.Fill in your location details');
//         prompt(locationForm);
//         alert('Your order will be delivered to ' + locationForm);
//     }
//     else if(deliveryNo ==='No'){
//         alert('The total cost of your order is ');
//     }
//     else {
//         alert('Please select yes/no to the delivery option');
//     }
// });
function getDelivery(){    
    if(document.getElementById("yes").checked){
        delivery = deliveryYes;
        alert('Cost of delivery is 300/-.Fill in your location details');
        var locationForm=prompt(getElementById('deliveryLocation'));

        alert('Your order will be delivered to ' + locationForm);
    }
    else if(document.getElementById("no").checked) {
        delivery= deliveryNo;
    }
}
        
//Location textarea
        //Alert

// Checkout button
