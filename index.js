/*
    CRUD Ecommerce Homework

    Vo mockAPI pod "commerce" search kade sto dodavate od koj tip da bidat polinjata razgledajte gi
    site ponudeni i kreirajte lista po vas izbor so produkti. 
    Istite prikazete gi vo HTML kako karticki. 
    Sekoja karticka vo sebe neka gi sodrzi opciite "Edit", "Delete" i 'Add to Cart"
    (koja sto ke ni gi dodava produktite vo kosnicka).
*/

const apiUrl = "https://66ae1187b18f3614e3b6aa7e.mockapi.io/api/v1/products";

async function getProducts() {
  const response = await fetch(apiUrl);
  const products = await response.json();
  return products;
}

async function getProductById(productId) {
  const response = await fetch(`${apiUrl}/${productId}`);
  const product = await response.json();
  return product;
}

function displayProducts() {
  document.getElementById("products").innerHTML = "";

  getProducts().then((products) => {
    for (let product of products) {

      document.getElementById("products").innerHTML += `
        <div class="col-md-3">
              <div class="card m-2" style="width: 100%;">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body" id="productEdit-${product.id}">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="fw-bold">$${product.price}</p>
                  <p>${product.description}</p>
                  <div class="d-flex justify-content-between">
                    <p>${product.product}</p>
                    <p>${product.material}</p>
                    <p>${product.department}</p>
                  </div>
                 
                  <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                  <button class="btn btn-outline-success" onclick='editProduct(${JSON.stringify(product)})'>Edit</button>
                  <button class="btn btn-warning" onclick='addToCard(${product.id})'>Add to card</button>
                  
                </div>
              </div>
          </div>`;
    }
  });
}

window.addEventListener("load", displayProducts);



async function deleteProductById(id) {
  const response = await fetch(`${apiUrl}/${id}`,
    {
      method: "DELETE"
    }
  );
  const product = await response.json();
  return product;
}

function deleteProduct(productId) {
  deleteProductById(productId)
  .then((response)=>{
    displayProducts();
  });
}




async function updateProductById(productId) {

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription = document.getElementById("productDescription").value;
  const product = document.getElementById("product").value;
  const productMaterial = document.getElementById("productMaterial").value;
  const productDepartment = document.getElementById("productDepartment").value;

  const data = {
      name: productName,
      price: productPrice,
      description: productDescription,
      product: product,
      material: productMaterial,
      department: productDepartment
  }
  

  const response = await fetch(`${apiUrl}/${productId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });

  const result = await response.json();
  return result;
}

function updateProduct(productId){
  updateProductById(productId)
  .then(product => {
    displayProducts();
  });
}


function editProduct(product){
  const divElement = document.getElementById("productEdit-"+product.id);

  divElement.innerHTML = `
          <label for="productName">Name</label>
          <input type="text" class="form-control" id="productName" value="${product.name}">
          <label for="productPrice">Price</label>
          <input type="text" class="form-control" id="productPrice" value="${product.price}">
          <label for="productDescription">Description</label>
          <input type="text" class="form-control" id="productDescription" value="${product.description}">
          <label for="product">Product</label>
          <input type="text" class="form-control" id="product" value="${product.product}">
          <label for="productMaterial">Material</label>
          <input type="text" class="form-control" id="productMaterial" value="${product.material}">
          <label for="productDepartment">Department</label>
          <input type="text" class="form-control" id="productDepartment" value="${product.department}">
          <button class="btn btn-outline-success mt-2" type="submit" onclick="updateProduct(${product.id})">Update Product</button>
  `;
}



let cards = [];

let cardItemsFromStorage = localStorage.getItem("cards");

if(cardItemsFromStorage){
  cards = JSON.parse(cardItemsFromStorage);
}

showCards();

function addToCard(productId) {
  cards.push(productId);
  localStorage.setItem("cards", JSON.stringify(cards));
  showCards();
}

function showCards() {
  let cardsString = "";

  for (productId of cards) {
    createCardItem(productId)
      .then(cardString => {
        cardsString += cardString
        return cardsString;
      })
      .then(data => {
        console.log(data);
        document.getElementById("cards").innerHTML = data;
      });
  }

  if(cards.length > 0) {
    document.getElementById("cardsParent").classList.remove("d-none");
  } else {
    document.getElementById("cardsParent").classList.add("d-none");
  }
}

function createCardItem(productId) {

  return getProductById(productId)
    .then(product =>
      `<div class="d-flex justify-content-between border p-3">
          <h5>${product.name} $${product.price}</h5>
          <button class="btn btn-danger" onclick="removeFromCard('${product.id}')">Remove</button>
        </div>`

    );

}


function removeFromCard(productId) {

  let index = cards.findIndex((cardItem) => cardItem == productId);

  if (index > -1) {
    cards.splice(index, 1);
  }

  localStorage.setItem("cards", JSON.stringify(cards));

  showCards();
}   
