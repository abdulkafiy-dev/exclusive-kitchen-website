// script.js
const menuItems = [
  {
    name: "Edika Ikong Soup",
    price: "₦10,000",
    description: "A delicious Nigerian soup made with a variety of vegetables and meats",
    image: "assets/images/edika-ikong-soup(10k).jpg",
  },
  {
    name: "Fried Rice with Chicken",
    price: "₦5000",
    description: "A flavorful dish of fried rice served with tender chicken and a side of salad",
    image: "assets/images/friedrice-chicken-with-salad(5k).jpeg",
  },
  {
    name: "Ogbono Soup",
    price: "₦8000",
    description: "A popular Nigerian soup made with ground ogbono seeds, often served with pounded yam or fufu",
    image: "assets/images/ogbono-soup(8k).jpg",
  },
  {
    name: "Vegetable Soup",
    price: "₦10,000",
    description: "A hearty soup made with a variety of fresh vegetables, perfect for a healthy meal",
    image: "assets/images/vegetable-beef-and-ponmo-with-swallow(10k).jpg",
  },
];

const menuGrid = document.getElementById("menuGrid");

menuItems.forEach(item => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  menuItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price} – ${item.description}</p>
    <a class="btn order-btn" href="https://wa.me/2347011227590?text=Hello%20Exclusive%20Kitchen,%20I want to order ${encodeURIComponent(item.name)}" target="_blank">
      Order Now
    </a>
  `;

  menuGrid.appendChild(menuItem);
});