const Elid = document.querySelector("#product-list");

fetch('http://localhost:3000/products')
  .then((response) => response.json())
  .then((products) => {
    console.log(products);

    const productList = document.getElementById('product-list');

    products.forEach((product) => {
      const productDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newp = document.createElement("p");
      const newh1 = document.createElement("h1");
      const newpi = document.createElement("p");

      newp.textContent = product.info; 
      newh1.textContent = product.name;
      newpi.textContent = `Price: $${product.price}`;

      newImg.src = product.img;

      newImg.style.width = '250px';
      newImg.style.height = '250px';

      productDiv.appendChild(newImg); 
      productDiv.appendChild(newh1);  
      productDiv.appendChild(newpi);  
      productDiv.appendChild(newp);   

      productList.appendChild(productDiv);  
    });
  })
  .catch((error) => {
    console.error('Error fetching products:', error);
  });