//Base Products in Cart
const cartItems = [
    { name: 'Dog Bed', price: 20, qty: 1},
    { name: 'Great New Book', price: 10, qty: 3},
    { name: 'Mechanical Keyboard', price: 200, qty: 1},
]

// Display the basic cart without Price
const displayCart = (itemsInCart) => {
    cartItems.map(item => {
        console.log(`${item.name}: QTY: ${item.qty} @ \$${item.price} `);
    })
}

// Display the basic cart without Price
const displayCartAnotherWay = (itemsInCart) => {
    cartItems.map(item => {
        console.log(`${item.qty} ${item.name} x \$${item.price} `);
    })
}

// Show basic Cart
displayCart(cartItems);
displayCartAnotherWay(cartItems);

//Pure Get Total Function (no dependencies or side effects)
const getTotal = (productList) => { //Take Product List
    return productList.reduce((currentTotal, product) => { //Reduce to sum of all
        return currentTotal + (product.price * product.qty);
    }, 0);
}

//Whats the cart total?
console.log(`Total: \$${getTotal(cartItems)}`);

// Higher Order function to add Totaling
const withTotal = fn => { //takes a displayCart function
    return (...args) => {
        const cartTotal = getTotal(...args);
        console.log(`Cart Total \$${cartTotal}`);
        return fn(...args);
    }
}



//New function with Total
const displayCartWithTotal = withTotal(displayCart);
const displayCartAnotherWayWithTotal = withTotal(displayCartAnotherWay);

// Use new function instead
displayCartWithTotal(cartItems);
console.log('---------------------');
displayCartAnotherWayWithTotal(cartItems);




