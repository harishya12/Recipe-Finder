const recipeDB = [{
    name: "Tomato Pasta",
    ingredients: ["spaghetti", "penne ", "unsalted butter ", "garlic ",
        "onion", "tomato passata", "thick cream", "milk",
        "parmesan", "dried basil", "salt", "pepper"
    ],
    description: "A creamy tomato pasta made with garlic butter, rich tomato sauce, and a hint of basil, finished with parmesan cheese.",
    image: "https://prolicious.com/cdn/shop/articles/Tangy_Tomato_Red_Sauce_Pasta.jpg?v=1705585316&width=480"
}]
window.onload = function() {
    const listDiv = document.getElementById("pasta-list");
    const detailDiv = document.getElementById("recipe-details");

    recipeDB.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" style="width:200px;cursor:pointer;" />
      <h3 style="cursor:pointer;">${recipe.name}</h3>
    `;
        card.onclick = () => {
            listDiv.style.display = "none";
            document.getElementById("home-button").style.display = "none";

            detailDiv.innerHTML = `
    <div class="recipe-details-card">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" style="width:300px;" />
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
      <p><strong>Description:</strong> ${recipe.description}</p>
    </div>
  `;

            document.getElementById("nav-buttons").style.display = "flex";
        };

        listDiv.appendChild(card);
    });
};

function goBackHome() {
    window.location.href = "../index.html";
}

function goBackToFlavours() {
    document.getElementById("pasta-list").style.display = "flex";
    document.getElementById("recipe-details").innerHTML = "";
    document.getElementById("nav-buttons").style.display = "none";
    document.getElementById("home-button").style.display = "flex";
}