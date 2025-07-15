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
    }, {
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
    }, {
        name: "Tomato Pasta",
        ingredients: ["spaghetti", "penne ", "unsalted butter ", "garlic ",
            "onion", "tomato passata", "thick cream", "milk",
            "parmesan", "dried basil", "salt", "pepper"
        ],
        description: "A creamy tomato pasta made with garlic butter, rich tomato sauce, and a hint of basil, finished with parmesan cheese.",
        image: "https://prolicious.com/cdn/shop/articles/Tangy_Tomato_Red_Sauce_Pasta.jpg?v=1705585316&width=480"
    }, {
        name: "Egg Fried Rice",
        ingredients: ["boiled rice", "eggs", "spring onions", "garlic", "soy sauce", "pepper", "salt"],
        description: [
            "Heat oil in a pan and scramble the eggs. Set aside.",
            "In the same pan, sauté garlic and spring onions until fragrant.",
            "Add cold rice and stir-fry over high heat to separate grains.",
            "Pour soy sauce around the edges and season with salt and pepper.",
            "Toss scrambled eggs back in, stir well, and garnish with spring onions."
        ],
        image: "https://media.istockphoto.com/id/1175434591/photo/fried-rice-with-ketchup-and-soy-sauce.jpg?s=612x612&w=0&k=20&c=h4PypFpU_ktxXBGlw6P-K6t6WfDeJ6PMcCEXb7rwxqk="
    },
    {
        name: "Veg Fried Rice",
        ingredients: ["boiled rice", "carrots", "capsicum", "beans", "peas", "soy sauce", "pepper", "garlic"],
        description: [
            "Heat oil in a wok, sauté garlic and spring onions until aromatic.",
            "Add chopped vegetables and stir-fry on high heat until slightly tender.",
            "Add cold rice and break up any clumps while tossing.",
            "Drizzle soy sauce, season with salt and pepper. Mix well.",
            "Garnish with fresh spring onions and serve hot."
        ],
        image: "https://media.istockphoto.com/id/507155407/photo/healthy-homemade-fried-rice.jpg?s=612x612&w=0&k=20&c=WvNGk-7iwrBmsXH1QrrT7vaCTuB2Nij57mQey0VMohU="

    },
    {
        name: "Chicken Fried Rice",
        ingredients: [
            "2 cups cooked rice (preferably cold)",
            "1 cup cooked chicken (shredded or diced)",
            "2 eggs (lightly beaten)",
            "1/4 cup chopped carrots",
            "1/4 cup green peas",
            "2 tbsp chopped spring onions",
            "2 cloves garlic (minced)",
            "2 tbsp soy sauce",
            "1 tbsp oil",
            "Salt and pepper to taste"
        ],
        description: [
            "Heat oil in a wok or large pan. Scramble the eggs and set aside.",
            "Add garlic and sauté until fragrant. Toss in carrots and peas, stir-fry until tender.",
            "Add cooked chicken and stir-fry for 2–3 minutes.",
            "Add cold rice and break up clumps. Stir-fry on high heat.",
            "Drizzle soy sauce, season with salt and pepper, then mix in scrambled eggs and spring onions. Serve hot!"
        ],
        image: "https://i.ytimg.com/vi/7AxydboW8v8/maxresdefault.jpg"
    },
    {
        name: "Mutton Keema Rice",
        ingredients: [
            "2 cups cooked basmati rice (cold)",
            "1 cup mutton keema (minced mutton)",
            "1 small onion (finely chopped)",
            "1 tomato (chopped)",
            "1 tsp ginger-garlic paste",
            "1/2 tsp turmeric powder",
            "1 tsp red chili powder",
            "1/2 tsp garam masala",
            "2 tbsp oil or ghee",
            "Salt to taste",
            "Fresh coriander or mint leaves (for garnish)"
        ],
        description: [
            "Heat oil in a pan, sauté onions until golden. Add ginger-garlic paste and cook until raw smell disappears.",
            "Add tomatoes, turmeric, chili powder, and salt. Cook until tomatoes soften.",
            "Add mutton keema and cook until browned and fully cooked. Sprinkle garam masala and mix well.",
            "Add cooked rice and gently toss to combine with the keema masala.",
            "Garnish with chopped coriander or mint and serve hot."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVcvLkhCnbQsPc5TzgcSQcAK8vcxH0ddMng&s"
    },
    {
        name: "Prawn Fried Rice",
        ingredients: [
            "2 cups cooked basmati rice (cold)",
            "200g prawns (cleaned and deveined)",
            "2 eggs (optional, scrambled)",
            "1/4 cup chopped onions",
            "1/4 cup chopped capsicum",
            "2 tbsp spring onions (chopped)",
            "2 cloves garlic (minced)",
            "1 tbsp soy sauce",
            "1/2 tsp black pepper",
            "2 tbsp oil",
            "Salt to taste"
        ],
        description: [
            "Marinate prawns with a pinch of salt and pepper. Sauté in oil until just cooked, then set aside.",
            "In the same pan, scramble eggs (if using) and set aside.",
            "Add more oil if needed. Sauté garlic, onions, and capsicum until slightly soft.",
            "Add cooked rice and toss well. Pour in soy sauce, season with salt and pepper.",
            "Add prawns, scrambled eggs, and spring onions. Mix everything and stir-fry for 2–3 minutes. Serve hot!"
        ],
        image: "https://fireandsmokesociety.com/cdn/shop/articles/Shrimp-and-Bacon-Fried-Rice-Recipe_1024x1024.jpg?v=1718912832"
    }
];

function findRecipes() {
    const input = document.getElementById("ingredientInput").value.toLowerCase().trim();
    const recipesDiv = document.getElementById("recipes");
    const detailDiv = document.getElementById("recipe-details");
    detailDiv.innerHTML = "";
    recipesDiv.innerHTML = "";

    if (!input) {
        recipesDiv.innerHTML = "<p>Please enter at least one ingredient or recipe name.</p>";
        return;
    }

    const searchTerms = input.split(",").map(item => item.trim().toLowerCase());

    const results = recipeDB.filter(recipe =>
        searchTerms.every(term =>
            recipe.name.toLowerCase().includes(term) ||
            (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(term)))
        )
    );

    if (results.length === 0) {
        recipesDiv.innerHTML = "<p>No matching recipes found.</p>";
        return;
    }

    results.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" style="width:200px; border-radius:10px;" />
            <h3>${recipe.name}</h3>
        `;
        card.onclick = () => showRecipeDetails(recipe, results);
        recipesDiv.appendChild(card);
    });

    recipesDiv.style.display = "flex";
    previousResults = results;
}

let previousResults = [];

function showRecipeDetails(recipe, results) {
    previousResults = results;
    const detailDiv = document.getElementById("recipe-details");
    document.getElementById("recipes").style.display = "none";

    detailDiv.innerHTML = `
        <div class="recipe-details-card">
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" style="width:300px;" />
            <p><strong>Ingredients:</strong> ${recipe.ingredients?.join(", ") || "Not listed"}</p>
            <p><strong>Description:</strong> ${Array.isArray(recipe.description) ? recipe.description.join("<br>") : recipe.description}</p>
            <button onclick="goBackToResults()">Back</button>
        </div>
    `;
}

function goBackToResults() {
    const recipesDiv = document.getElementById("recipes");
    const detailDiv = document.getElementById("recipe-details");

    recipesDiv.innerHTML = "";
    previousResults.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" style="width:200px; border-radius:10px;" />
            <h3>${recipe.name}</h3>
        `;
        card.onclick = () => showRecipeDetails(recipe, previousResults);
        recipesDiv.appendChild(card);
    });

    detailDiv.innerHTML = "";
    recipesDiv.style.display = "flex";
}

window.onload = function() {
    const inputBox = document.getElementById("ingredientInput");
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            findRecipes();
        }
    });
};