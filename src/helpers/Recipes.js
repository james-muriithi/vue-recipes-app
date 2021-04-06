function saveRecipes(recipes) {
  localStorage.setItem("recipes", recipes);
}

function getLocalRecipes() {
  return localStorage.getItem("recipes");
}

async function fetchRecipes(number = 15) {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=21d1863b6aad44b492d77e877d2b6c06&number=${number}`;
  const response = await fetch(url);

  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "An error fetching recipes");
  }
  return responseData;
}

export { saveRecipes, getLocalRecipes, fetchRecipes };
