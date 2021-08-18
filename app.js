// document.getElementById('phone-increase').addEventListener('click', function () {
//     const inputValue = document.getElementById('phone-value');
//     const increaseValue = parseInt(inputValue.value) + 1;
//     inputValue.value = increaseValue;
// });
// document.getElementById('phone-decrease').addEventListener('click', function () {
//     const inputValue = document.getElementById('phone-value');
//     const increaseValue = parseInt(inputValue.value) - 1;
//     inputValue.value = increaseValue;
// });

function countProduct(product, price, isIncrease) {
    const inputValue = document.getElementById(product + '-value');
    let increaseValue = parseInt(inputValue.value)
    if (isIncrease == true) {
        increaseValue =  increaseValue + 1;
    }
    else if(increaseValue > 0) {
        increaseValue =  increaseValue - 1;
    }
    inputValue.value = increaseValue;

    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = increaseValue * price;
    calculateTotal();
}
function calculateTotal() {
    const subTotal = document.getElementById('sub-total');
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotalPrice = parseInt(phonePrice) + parseInt(casePrice);
    subTotal.innerText = subTotalPrice;
    const tax = document.getElementById('tax');
    const taxAmount =  subTotalPrice / 10;
    tax.innerText = taxAmount;
    const total = document.getElementById('total');
    total.innerText = subTotalPrice + taxAmount;
}