let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;
});


document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    // Using the forEach Loop on Cart to check if the item is already in the cart or not.
    let matchingItem ;
    cart.forEach((item) => {
      // if the item is already in the cart that mean the item is matched.
      if (productId === item.productId) {
        matchingItem = item;
      }
      });
      // if the matchingitem comes "true" then update the matchingItem quantity and increase its total by 1. if Not true, that's mean the item is new in the cart and we just add it to the cart array.
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });    
      }

      // Using the forEach loop for the "cart" array and add the item quantity to the cart quantity as the total quantity.
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      })

      // Using DOM to update the total quantity at the top right on the amazon home page.
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  });
});