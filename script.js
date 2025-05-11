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
  
  function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existing = cart.find(item => item.id === id);
  
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Ürün sepete eklendi!");
  }