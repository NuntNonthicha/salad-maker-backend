const express = require("express");
const recipeController = require("../controllers/recipe.controller");

const useRecipeRoute = (router) => {
  router.post("/create-recipe", recipeController.createRecipe);
  router.patch("/edit-recipe/:id", recipeController.updateRecipe);
  router.get("/recipes", recipeController.getAllRecipes);
  router.get("/recipe/:id", recipeController.getRecipeById);
  router.delete("/recipe/:id", recipeController.deleteRecipe);
};

module.exports = useRecipeRoute;
