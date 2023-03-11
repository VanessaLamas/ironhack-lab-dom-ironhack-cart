function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
}

function calculateAll() {
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

/*
const addItemButton = document.querySelector('#add-item button');
addItemButton.addEventListener('click', addItem)
function addItem(event){
  // <ul id="list">
  const list = document.querySelector('#list');
  // input del formulario
  const input = document.querySelector('#add-item input[type="text"]');
  // si el input del formulario esta vacio, no hacer nada
  if (!input.value) {
    return false;
  }
  // crear un elemento HTML del tipo li y le asignamos su contenido
  // con input.value
let item = document.createElement ('li');
  item.textContent = input.value;
  //añadirlo en lista
  list.appendChild(item);
}
*/


function createProduct() {

}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});
