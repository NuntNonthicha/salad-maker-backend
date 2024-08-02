const express = require("express");
const useIngredientRoute = require("./ingredient.route");
const useRecipeRoute = require("./recipe.route");

const Router = express.Router();

useIngredientRoute(Router);
useRecipeRoute(Router);

module.exports = Router;
