function displayCart() { 

    let cart = []
    if (!localStorage.getItem("savedcart")) { //checks if it exists yet
        localStorage.setItem("savedcart", JSON.stringify([])) 
     }
     else {
         cart = JSON.parse(localStorage.getItem('savedcart'))
     }

    console.log(cart)
    const cartDiv = document.getElementById("cart_page_container");
    const template = document.getElementById("cart-item-template");

    console.log(template)

    for (let i = 0; i < cart.length; i++ ) {
        let cart_item = cart[i];
        console.log(cart_item);
        var clone = template.content.cloneNode(true);
        clone.querySelector('.cart_flavor').innerText = cart_item.flavor;
        clone.querySelector('.cart_glaze').innerText = cart_item.glaze;
        clone.querySelector('.cart_qty').innerText = cart_item.qty;
        clone.querySelector('.cart_price').innerText = cart_item.price;
        cartDiv.appendChild(clone);
    }
}
displayCart()

function RemoveFromCart () {

    let cart = []
    if (!localStorage.getItem("savedcart")) { //checks if it exists yet
        localStorage.setItem("savedcart", JSON.stringify([])) 
    }
    else {
         cart = JSON.parse(localStorage.getItem('savedcart'))
    }

    this.parentElement.parentElement.remove()


}

