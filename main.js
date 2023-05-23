// Initial items data
const initialItems = [
    {
      itemName: "Banana",
      itemDescription: "The yellow beast",
      itemPrice: 100.00,
      itemImage: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
    {
      itemName: "Apple",
      itemDescription: "the best apple out there",
      itemPrice: 19.99,
      itemImage: "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png"
    }
  ];
  
  // Load initial items on page load
  window.addEventListener("DOMContentLoaded", () => {
    loadItems();
  });
  
  // Handle form submission
  document.getElementById("itemForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addItem();
  });
  
  // Handle clear button click
  document.getElementById("clearButton").addEventListener("click", () => {
    clearForm();
  });
  
  // Handle delete all button click
  document.getElementById("deleteAllButton").addEventListener("click", () => {
    deleteAllCards();
  });
  
  // Load items from initialItems
  function loadItems() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear existing items
  
    initialItems.forEach((item) => {
      createItemCard(item);
    });
  }
  
  // Add a new item from form inputs
  function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemImage = document.getElementById("itemImage").value;
  
    const newItem = {
      itemName,
      itemDescription,
      itemPrice,
      itemImage
    };
  
    createItemCard(newItem);
    clearForm();
  }
  
  // Create a new item card
  function createItemCard(item) {
    const itemList = document.getElementById("itemList");
  
    const itemCard = document.createElement("li");
    itemCard.classList.add("itemCard");
  
    const image = document.createElement("img");
    image.src = item.itemImage;
    image.alt = item.itemName;
  
    const name = document.createElement("h3");
    name.textContent = item.itemName;
  
    const description = document.createElement("p");
    description.textContent = item.itemDescription;
  
    const price = document.createElement("p");
    price.textContent = `$${item.itemPrice.toFixed(2)}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteItem(itemCard);
  });
  
    itemCard.appendChild(image);
    itemCard.appendChild(name);
    itemCard.appendChild(description);
    itemCard.appendChild(price);
    itemCard.appendChild(deleteButton);
  
    itemList.appendChild(itemCard);

  }
  
  // Clear form inputs
  function clearForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemDescription").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemImage").value = "";
  }

  function deleteItem(itemCard) {
    itemCard.classList.add("itemCard-delete");
    itemCard.addEventListener("animationend", () => {
      itemCard.remove();
    });
  }
  // Delete all item cards
  function deleteAllCards() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
  }
  