const express = require("express");
const useIngredientRoute = require("./ingredient.route");
const useRecipeRoute = require("./recipe.route");
const useUserRoute = require("./user.route");

const Router = express.Router();

useIngredientRoute(Router);
useRecipeRoute(Router);
useUserRoute(Router);

module.exports = Router;
