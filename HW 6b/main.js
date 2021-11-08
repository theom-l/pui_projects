

let cart_counter = 0

/* Page update functions when clicking radio buttons */
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

/* Obj constructor */

function cart_item (flavor, glaze, qty, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.qty = qty;
    this.price =  price;
} 

/* TODO Radio button selection */ 
/* document.getSelection(



var flavorSelection = document.getSelection()
var  */

/* Add to cart function, updates cart counter, displays message in button, with timeout */

function AddToCart() {

    // Check radio buttons 
    /* let buttonChecked = ""
    var radioButtons = document.getElementsByTagName("input")
    for (let button of radioButtons) {
    if (button.checked) buttonChecked = button.value;
    } */


    var selected = document.querySelector('input [type=radio][name="qty"]:checked');
    if(selected != null) {   
    var qty = selected.value; 
    console.log (qty) 
    }  

    var selected = document.querySelector('input [type=radio][name="glaze"]:checked');
    if(selected != null) {   
    var glaze = selected.value;
    console.log (glaze)
    } 

    //set price param based on radio selections
    if (qty = "1") {
    var price = 3.00
    }

    else if (qty = "3") {
    var price = 9.00
    }

    else if (qty = "6") {
    var price = 18.00
    }

    else if (qty = "12") {
    var price = 36.00
    }

    /* const cart = [];
    localStorage.setItem('savedCart', JSON.stringify(cart));
    if (!localStorage.getItem("cart")) { //checks if it exists yet
        localStorage.setItem("cart", JSON.stringify([])) 
     }


    const item1 = new cart_item (flavor, qty, glaze, price);
    const storedValue = JSON.parse(localStorage.getItem('savedCart'))
    const cart = storedValue
    cart.push(item1);
 */

    document.getElementById('AddToCart').innerHTML = "Added!"
    function ChangeBack () { 
        document.getElementById('AddToCart').innerHTML = "Add to cart"
    }
    setTimeout(ChangeBack, 1500)
}
/* 
 */








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
