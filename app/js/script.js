var bag-price = 199,
    belt-price = 49,
    shoes-price = 199,
    bag-quantity = 1,
    belt-quantity = 1, 
    shoes-quantity = 1,
    bag-total = bag-price * bag-quantity,
    belt-total = belt-price * belt-quantity,
    shoes-total = shoes-price * shoes-quantity,
    subtotal = bag-total + belt-total + shoes-total;

function plusBag() {
    bag-quantity++;
    document.querySelector('#bag-quantity').innerHTML = bag-quantity;
    documet.querySelector('#bag-total').innerHTML = '&#36;' + bag-total;
}

