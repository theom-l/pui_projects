
function cartCountUpdate () {
    let cart = []
    if (!localStorage.getItem("savedcart")) { //checks if it exists yet
        localStorage.setItem("savedcart", JSON.stringify([])) 
     }
     else {
         cart = JSON.parse(localStorage.getItem('savedcart'))

     }
    document.getElementById("cart_counter").innerHTML = cart.length;
}
cartCountUpdate ()

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

//Obj constructor
function cart_item (flavor, glaze, qty, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.qty = qty;
    this.price =  price;
} 

function AddToCart() {

    // Check radio buttons 
    var selected1 = document.querySelector('input[name="qty"]:checked');
    if(selected1 != null) {   
    var qty = selected1.value; 
    }  

    var selected2 = document.querySelector('input[name="glaze"]:checked');
    if(selected2 != null) {   
    var glaze = selected2.value;
    } 

    //Check Flavor
    let flavor = document.getElementById("RollFlavor").innerHTML

    //set price param based on radio selections
    if (qty == 1) {
        var price = 3.00
    }

    else if (qty == 3) {
        var price = 9.00
    }

    else if (qty == 6) {
        var price = 18.00
    }

    else if (qty == 12) {
        var price = 36.00
    }

    //set cart
    let cart = []
    if (!localStorage.getItem("savedcart")) { //checks if it exists yet
        localStorage.setItem("savedcart", JSON.stringify([])) 
     }
     else {
         cart = JSON.parse(localStorage.getItem('savedcart'))

     }

     //add new to cart
    const item1 = new cart_item(flavor, glaze, qty, price);
    cart.push(item1);
    //console.log(cart)

    localStorage.setItem("savedcart", JSON.stringify(cart));

    // Display message
    document.getElementById('AddToCart').innerHTML = "Added!"
    function ChangeBack () { 
        document.getElementById('AddToCart').innerHTML = "Add to cart"
    }
    setTimeout(ChangeBack, 1500)
}

function AddToWishlist() {

    // Check radio buttons 
    var selected1 = document.querySelector('input[name="qty"]:checked');
    if(selected1 != null) {   
    var qty = selected1.value; 
    }  

    var selected2 = document.querySelector('input[name="glaze"]:checked');
    if(selected2 != null) {   
    var glaze = selected2.value;
    } 

    //Check Flavor
    let flavor = document.getElementById("RollFlavor").innerHTML

    //set price param based on radio selections
    if (qty == 1) {
        var price = 3.00
    }

    else if (qty == 3) {
        var price = 9.00
    }

    else if (qty == 6) {
        var price = 18.00
    }

    else if (qty == 12) {
        var price = 36.00
    }

    //set wishlist
    let wishlist = []
    if (!localStorage.getItem("savedwishlist")) { //checks if it exists yet
        localStorage.setItem("savedwishlist", JSON.stringify([])) 
     }
     else {
         wishlist = JSON.parse(localStorage.getItem('savedwishlist'))
     }

     //add new to sihlist
    const item1 = new cart_item(flavor, glaze, qty, price);
    wishlist.push(item1);
    console.log(wishlist)

    localStorage.setItem("savedwishlist", JSON.stringify(wishlist));

    // Display message
    document.getElementById('AddToWishlist').innerHTML = "Added!"
    function ChangeBack () { 
        document.getElementById('AddToWishlist').innerHTML = "Add to wishlist"
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
