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

function displayCart() { 

    let cart = []
    if (!localStorage.getItem("savedcart")) { //checks if it exists yet
        localStorage.setItem("savedcart", JSON.stringify([])) 
     }
     else {
         cart = JSON.parse(localStorage.getItem('savedcart'))
     }

    /* console.log(cart) */
    const cartDiv = document.getElementById("cart_page_container");
    const template = document.getElementById("cart-item-template");

    /* console.log(template) */

    for (let i = 0; i < cart.length; i++ ) {
        let cart_item = cart[i];
        /* console.log(cart_item); */
        var clone = template.content.cloneNode(true);
        clone.querySelector('.cart_flavor').innerText = cart_item.flavor;
        clone.querySelector('.cart_glaze').innerText = cart_item.glaze;
        clone.querySelector('.cart_qty').innerHTML = cart_item.qty;
        clone.querySelector('.cart_price').innerHTML= cart_item.price;
        /* console.log(clone); */

        const remove_button = clone.querySelector(".remove_button");
        remove_button.addEventListener('click', function() {
            this.parentElement.parentElement.remove ()
            cart.splice(cart[i],1)
            /* console.log(cart) */
            localStorage.setItem("savedcart", JSON.stringify(cart))
            cartCountUpdate ()
        })

        cartDiv.appendChild(clone);
    }
    
    /* console.log(cart) */

}
displayCart()

