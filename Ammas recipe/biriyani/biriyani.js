const recipeDB = [{
    name: "Chicken Biriyani",
    ingredients: ["chicken", "basmati rice", "yogurt", "ginger garlic paste", "onion",
        "tomatoes", "mint leaves", "coriander leaves", "green chili",
        "red chili powder", "turmeric", "garam masala", "bay leaf",
        "cardamom", "cloves", "cinnamon", "star anise", "shahi jeera",
        "mace", "lemon juice", "ghee", "saffron", "salt", "water"
    ],
    description: `
    <ul>
      <li>Marinate chicken with yogurt, ginger-garlic paste, turmeric, red chili powder, garam masala, and salt. Rest for 30 minutes to 2 hours.</li>
      <li>Fry onions until golden brown; set some aside for layering. Sauté whole spices (bay leaf, cardamom, cloves, cinnamon) in ghee or oil.</li>
      <li>Add marinated chicken and cook until tender and the masala thickens.</li>
      <li>Parboil basmati rice with salt and whole spices like star anise and shahi jeera.</li>
      <li>In a heavy pot, layer rice and chicken, topping with fried onions, mint, coriander, saffron milk, and ghee.</li>
      <li>Seal the pot (with dough or a tight lid) and cook on low heat (dum) for 20–25 minutes.</li>
      <li>Let it rest, then gently fluff and serve hot with raita or salan.</li>
    </ul>
  `,
    image: "https://5.imimg.com/data5/PP/VM/SD/SELLER-26887890/hyderabadi-dum-biryani-jpg.jpg"
}, {
    name: "Mutton Biriyani",
    image: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg",
    ingredients: [
        "500g mutton",
        "2 cups basmati rice",
        "1/2 cup curd",
        "2 onions (sliced)",
        "2 tomatoes (chopped)",
        "Ginger-garlic paste",
        "Spices (bay leaf, cinnamon, cardamom, cloves)",
        "Red chili powder",
        "Biriyani masala",
        "Coriander & mint leaves",
        "Oil/ghee",
        "Salt"
    ],
    description: [
        "Marinate mutton with curd, ginger-garlic paste, chili powder, biriyani masala, and salt.",
        "Sauté onions until golden, add tomatoes and the marinated mutton—cook until tender.",
        "Boil basmati rice with whole spices like bay leaf and drain when it's 80% cooked.",
        "Layer mutton and rice in a pot with fried onions, mint, coriander, and saffron milk.",
        "Seal the pot and cook on dum for 20 minutes—then fluff gently and serve hot."
    ]
}];
window.onload = function() {
    const listDiv = document.getElementById("biriyani-list");
    const detailDiv = document.getElementById("recipe-details");
    const navButtons = document.getElementById("nav-buttons");
    const homeButton = document.getElementById("home-button");

    recipeDB.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" style="width:200px;cursor:pointer;" />
      <h3 style="cursor:pointer;">${recipe.name}</h3>
    `;

        card.onclick = () => {
            listDiv.style.display = "none";
            if (homeButton) homeButton.style.display = "none";

            detailDiv.innerHTML = `
        <div class="recipe-details-card">
          <h2>${recipe.name}</h2>
          <img src="${recipe.image}" style="width:300px;" />
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
          <p><strong>Description:</strong> ${recipe.description}</p>
        </div>
      `;

            if (navButtons) navButtons.style.display = "flex";
        };

        listDiv.appendChild(card);
    });
};

function goBackHome() {
    window.location.href = "../index.html";
}

function goBackToFlavours() {
    document.getElementById("biriyani-list").style.display = "flex";
    document.getElementById("recipe-details").innerHTML = "";
    document.getElementById("nav-buttons").style.display = "none";
    document.getElementById("home-button").style.display = "flex";
}