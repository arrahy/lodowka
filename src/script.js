const main = document.querySelector("main");
const form = document.querySelector("form");
const foodName = document.getElementById("name");
const foodExpiryDate = document.getElementById("product_firstDate");
const foodOpenDate = document.getElementById("product_secondDate");
const foodExpiryAfterOpen = document.getElementById("product_afterOpen");
const foods = [];
class Food {
  constructor(product, expiryDate, openDate, daysAferOpen) {
    this.product = product;
    this.expiryDate = expiryDate;
    this.openDate = openDate;
    this.daysAferOpen = daysAferOpen;
  }
  addFood() {
    const createProduct = (text) => {
      const element = document.createElement("p");
      element.textContent = text;
      element.classList.add("product");
      return element;
    };

    main.appendChild(createProduct(this.product));
    main.appendChild(createProduct(this.expiryDate));
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let currentLast = 0;
  foods[currentLast] = new Food(
    foodName.value,
    foodExpiryDate.value,
    foodOpenDate.value,
    foodExpiryAfterOpen.value,
  );
  foods[currentLast].addFood();
  currentLast++;
  form.reset();
});
