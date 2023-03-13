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

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productWrapper = document.querySelector('#cart tbody');
  productWrapper.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productBody = document.querySelector('#cart tbody');
  const newProductName = document.querySelector('.create-product input[type="text"]');
  const newProductPrice = document.querySelector('.create-product input[type="number"]');

  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${parseInt(newProductPrice.value).toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  productBody.appendChild(newProductRow);

  // Queremos que btn-remove al hacer click elimine un producto
  const buttonRemove = newProductRow.querySelector('.btn-remove');
  buttonRemove.addEventListener('click', removeProduct );

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductButtons = document.querySelectorAll('.btn-remove');
  removeProductButtons.forEach( item => {
    console.log(item);
    item.addEventListener('click', removeProduct );
  });

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});

/*
  //crear variable que nos permita acceder al boton
const addItemButton = document.querySelector('#add-item button');
  //añadir un event listener al boton para que añada contenido
addItemButton.addEventListener('click', addItem)
function addItem(event){
  // llamar al contenido que quisiera plasmar <ul id="list">
  const list = document.querySelector('#list');
  // input del formulario
  const input = document.querySelector('#add-item input[type="text"]');
  // si el input del formulario esta vacio, no hacer nada, esto es una costumbre de buena practica
  if (!input.value) {
    return false;
  }
  // crear un elemento HTML del tipo li y le asignamos su contenido, que sería como el padre con innerhtml
  // con input.value
let item = document.createElement ('li');
  item.textContent = input.value;
  //añadirlo en lista
  list.appendChild(item);
}
*/


