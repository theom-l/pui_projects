function displayWishlist() { 

    let wishlist = []
    if (!localStorage.getItem("savedwishlist")) { //checks if it exists yet
        localStorage.setItem("savedwishlist", JSON.stringify([])) 
     }
     else {
        wishlist = JSON.parse(localStorage.getItem('savedwishlist'))
     }

    console.log(wishlist)
    const wishlistDiv = document.getElementById("cart_page_container");
    const template = document.getElementById("cart-item-template");

    /* console.log(template) */

    for (let i = 0; i < wishlist.length; i++ ) {
        let wishlist_item = wishlist[i];
        /* console.log(wishlist_item); */
        var clone = template.content.cloneNode(true);
        clone.querySelector('.cart_flavor').innerText = wishlist_item.flavor;
        clone.querySelector('.cart_glaze').innerText = wishlist_item.glaze;
        clone.querySelector('.cart_qty').innerHTML = wishlist_item.qty;
        clone.querySelector('.cart_price').innerHTML= wishlist_item.price;
        /* console.log(clone); */
        const remove_button = clone.querySelector(".remove_button");
        remove_button.addEventListener('click', function() {
            this.parentElement.parentElement.remove ()
            wishlist.splice(wishlist[i],1)
            /* console.log(wishlist) */
            localStorage.setItem("savedwishlist", JSON.stringify(wishlist))
        })
        wishlistDiv.appendChild(clone);
    }
    
    /* console.log(wishlist) */

}
displayWishlist()

