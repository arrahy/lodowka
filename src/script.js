const ADD_BUTTON = document.getElementById("add");
const main = document.getElementById("main");
let nameProduct = document.getElementById("name");
const form = document.getElementById("addingForm");

function addProduct(prod) {
  let newProduct = document.createElement("p");
  newProduct.textContent = prod.value;
  newProduct.classList.add("product");
  main.appendChild(newProduct);
  form.reset();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addProduct(nameProduct);
});

// ADD_BUTTON.addEventListener('click', addProduct)
