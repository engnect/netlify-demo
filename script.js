const products = [
    { id: 1, name: "Adidas Ayakkabı", price: 1799, category: "Giyim" },
    { id: 2, name: "DrFicor Roll-on", price: 175, category: "Kozmetik" },
    { id: 3, name: "Tişört", price: 249, category: "Giyim" }
  ];
function renderProducts(filteredProducts = products) {
    const container = document.querySelector(".product-list");
    container.innerHTML = "";
  
    filteredProducts.forEach(p => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="https://placehold.co/150" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.price} TL</p>
        <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">Sepete Ekle</button>
      `;
      container.appendChild(div);
    });
}
document.addEventListener("DOMContentLoaded", () => renderProducts());

function filterProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
  
    const filtered = products.filter(p => {
      const matchName = p.name.toLowerCase().includes(search);
      const matchCategory = category ? p.category === category : true;
      return matchName && matchCategory;
    });
  
    renderProducts(filtered);
  }
  
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