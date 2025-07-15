const recipeDB = [{
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
window.onload = function() {
    const listDiv = document.getElementById("rice-list");
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
    document.getElementById("rice-list").style.display = "flex";
    document.getElementById("recipe-details").innerHTML = "";
    document.getElementById("nav-buttons").style.display = "none";
    document.getElementById("home-button").style.display = "flex";
}