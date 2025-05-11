document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");
  
    fetch("data/products.json")
      .then((res) => res.json())
      .then((products) => {
        products.forEach((product) => {
          const card = document.createElement("div");
          card.className = "product-card";
  
          card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>${product.price} TL</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Sepete Ekle</button>
          `;
  
          productList.appendChild(card);
        });
      });
  });
  
  function addToCart(id) {
    alert(`Ürün sepete eklendi! ID: ${id}`);
  }
  