const express = require("express");
const router = express.Router();
const Ingredient = require("../models/ingredient.model");

const useIngredientRoute = async (router) => {
  // GET /api/ingredients
  router.get("/ingredients", async (req, res) => {
    try {
      const ingredients = await Ingredient.find();
      res.json(ingredients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

module.exports = useIngredientRoute;
