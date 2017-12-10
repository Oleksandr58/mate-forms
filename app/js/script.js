var bagprice = 199,
beltprice = 49,
shoesprice = 199,
bagquantity = 1,
beltquantity = 1, 
shoesquantity = 1,
bagtotal = 199,
belttotal = 49,
shoestotal = 199,
subtotal;

document.querySelector('#bag-plus').onclick = function() {
bagquantity++;
bagtotal = bagprice * bagquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#bag-quantity').innerHTML = bagquantity;
document.querySelector('#bag-total').innerHTML = '&#36;' + bagtotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
}

document.querySelector('#bag-minus').onclick = function() {
bagquantity--;
bagtotal = bagprice * bagquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
if (bagquantity == 0) {
 document.querySelector('.cart__line--bag').style.display = 'none';
}
else {              
document.querySelector('#bag-quantity').innerHTML = bagquantity;
document.querySelector('#bag-total').innerHTML = '&#36;' + bagtotal;              
}
}

document.querySelector('#belt-plus').onclick = function() {
beltquantity++;
belttotal = beltprice * beltquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#belt-quantity').innerHTML = beltquantity;
document.querySelector('#belt-total').innerHTML = '&#36;' + belttotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
}

document.querySelector('#belt-minus').onclick = function() {
beltquantity--;
belttotal = beltprice * beltquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
if (beltquantity == 0) {
 document.querySelector('.cart__line--belt').style.display = 'none';
}
else {              
document.querySelector('#belt-quantity').innerHTML = beltquantity;
document.querySelector('#belt-total').innerHTML = '&#36;' + belttotal;              
}
}

document.querySelector('#shoes-plus').onclick = function() {
shoesquantity++;
shoestotal = shoesprice * shoesquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#shoes-quantity').innerHTML = shoesquantity;
document.querySelector('#shoes-total').innerHTML = '&#36;' + shoestotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
}

document.querySelector('#shoes-minus').onclick = function() {
shoesquantity--;
shoestotal = shoesprice * shoesquantity;
subtotal = bagtotal + belttotal + shoestotal;
document.querySelector('#subtotal').innerHTML = '&#36;' + subtotal;
if (shoesquantity == 0) {
 document.querySelector('.cart__line--shoes').style.display = 'none';
}
else {        
document.querySelector('#shoes-quantity').innerHTML = shoesquantity;
document.querySelector('#shoes-total').innerHTML = '&#36;' + shoestotal;
}
}