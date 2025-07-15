const recipeDB = [{
        name: "Vanilla Ice Cream",
        ingredients: [
            "heavy cream",
            "sweetened condensed milk",
            "vanilla extract",
            "chocolate chips",
            "fruit",
            "nuts",
            "cookie bits"
        ],
        description: "Whip heavy cream until stiff peaks form. In a bowl, mix condensed milk and vanilla extract...",
        image: "https://www.foodandwine.com/thmb/QnTrAIt3aY1g4ToQEk-jULmKMsQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vanilla-ice-cream-FT-RECIPE0324-cebca493f53c4431a0049ea65bfb4796.jpg"
    },
    {
        name: "Chocolate Ice Cream",
        ingredients: [
            "2 cups heavy cream",
            "1.5 cups whole milk",
            "3/4 cup granulated sugar",
            "1/4 cup cocoa powder",
            "6 oz semisweet chocolate",
            "3 egg yolks",
            "1/2 tsp vanilla extract",
            "Pinch of salt"
        ],
        description: "Whisk cream and cocoa, melt in chocolate, temper egg yolks, then chill and churn in ice cream maker...",
        image: "https://static7.depositphotos.com/1009628/750/i/450/depositphotos_7509469-stock-photo-ice-cream.jpg"
    }
];

window.onload = function() {
    const listDiv = document.getElementById("ice-cream-list");
    const detailDiv = document.getElementById("recipe-details");
    const navButtons = document.getElementById("nav-buttons");
    const homeButton = document.getElementById("home-button");

    if (!listDiv || !detailDiv) return;

    recipeDB.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" style="width:200px;cursor:pointer;border-radius:10px;" />
            <h3 style="cursor:pointer;">${recipe.name}</h3>
        `;

        card.onclick = () => {
            listDiv.style.display = "none";
            if (homeButton) homeButton.style.display = "none";

            detailDiv.innerHTML = `
                <div class="recipe-details-card">
                    <h2>${recipe.name}</h2>
                    <img src="${recipe.image}" style="width:300px;border-radius:12px;" />
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                    <p><strong>Description:</strong> ${recipe.description}</p>
                </div>
            `;

            if (navButtons) navButtons.style.display = "flex";
        };

        listDiv.appendChild(card);
    });

    // Optional: show search box
    document.getElementById("search-section").style.display = "block";
};

function goBackHome() {
    window.location.href = "../index.html";
}

function goBackToFlavours() {
    const listDiv = document.getElementById("ice-cream-list");
    const detailDiv = document.getElementById("recipe-details");
    const navButtons = document.getElementById("nav-buttons");
    const homeButton = document.getElementById("home-button");

    if (listDiv) listDiv.style.display = "flex";
    if (detailDiv) detailDiv.innerHTML = "";
    if (navButtons) navButtons.style.display = "none";
    if (homeButton) homeButton.style.display = "flex";
}