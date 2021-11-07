
function AddToCart() {
    document.getElementById('AddToCart').innerHTML = "Added!"

    function ChangeBack () { 
        document.getElementById('AddToCart').innerHTML = "Add to cart"
    }
    
    setTimeout(ChangeBack, 1500)
}

function smUpdate() {
    document.getElementById('product_pic').src="assets/blue.png"

}

function vmUpdate() {
    document.getElementById('product_pic').src="assets/red.png"
    
}

function dcUpdate() {
    document.getElementById('product_pic').src="assets/purp.png"
    
}

function nUpdate() {
    document.getElementById('product_pic').src="assets/green.png"
    
}

function oneUpdate() {
    document.getElementById('product_pic').src="assets/orange.png"
    
}

function threeUpdate() {
    document.getElementById('product_pic').src="assets/red.png"
    
}

function sixUpdate() {
    document.getElementById('product_pic').src="assets/gray.png"
    
}

function twelveUpdate() {
    document.getElementById('product_pic').src="assets/white.png"
    
}

/* 

const sugarmilk  = document.getElementById('sugar-milk');
sugarmilk.addEventListener('click', function() {
    

})

const vanillamilk  = document.getElementById('vanilla-milk');
vanillamilk.addEventListener('click', function() {
    

})

const doublechocolate  = document.getElementById('double-chocolate');
doublechocolate.addEventListener('click', function() {
  update price to reflect

})

Questions
Better design than creating object for each radio button?
JS file structure / organization
Create an object for price calculation? loop through objects price to calculate
Create an object for selection display? 

Notes:
Event listener for add to cart
Look at status of radio button

Get elements for class name, 
Loop, 
document.getElementsByClassName
for (item of array) { }
product =  newproduct(..)

6B only work for one product page

To Update counter:
Add to cart, edit list, insert object, count the objects in the list
product = {flavor:’original’, glazing:’vanilla’, qty:6}
cart.push(product)
cart.length






Is this better?
document.getElementbyID('AddToCart').onclick = showFeedbackcart;
    function showFeedbackcart() { 

    }

*/
