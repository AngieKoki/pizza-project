//BUSINESS LOGIC




//FRONT END LOGIC
//Order Now button
$(document).ready(function(){
    $('.orderNow').click(function(){
        $('.orderForm').show();
        $('.orderNow').slideUp();
    });
     $('#checkout').click(function(){
        $('.orderNow').slideDown();
        $('.orderForm').hide();
    });
});
// Order form

    //Size of Pizza Manipulation

    //Toppings Manipulation

    //Crust Manipulation

    //Multiple Pizza Manipulation

//Delivery Manipulation
$(document).ready(function(){
    $('.checkout').click(function(){
        
    })
})
document.getElementById('checkout').addEventListener('click',
function submit(event){
    event.preventDefault();
    var deliveryYes = document.getElementById('yes').value;
    var deliveryNo = document.getElementById('no').value;
    var locationForm=document.getElementById('deliveryLocation').value;
    
    if (deliveryYes ==='Yes'){
        alert('Cost of delivery is 300/-.Fill in your location details');
        prompt(locationForm);
        alert('Your order will be delivered to ' + locationForm);
    }
    else if(deliveryNo ==='No'){
        alert('The total cost of your order is ');
    }
    else {
        alert('Please select yes/no to the delivery option');
    }
});
        
//Location textarea
        //Alert

// Checkout button
