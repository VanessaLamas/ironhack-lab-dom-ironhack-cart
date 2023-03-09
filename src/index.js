// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  const allProducts = document.querySelectorAll('#cart tbody tr.product');
  let total = 0;
  allProducts.forEach(product => {
    updateSubtotal(product);
    const subtotal = parseFloat(product.querySelector('.subtotal span').textContent);
    total += subtotal;
  });
  document.querySelector('#total-value span').textContent = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});


function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
