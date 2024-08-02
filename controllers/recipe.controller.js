const Recipe = require("../models/recipe.model");

console.log("Recipe controller loaded");

module.exports = {
  //Create a receipe
  createRecipe: async (req, res) => {
    try {
      const { name, detail } = req.body;

      if (!Array.isArray(detail)) {
        return res.status(400).json({ message: "Detail must be an array" });
      }

      let totalAmount = 0;
      let totalCalories = 0;

      detail.forEach((item) => {
        if (item.amount && item.calories) {
          totalAmount += item.amount;
          totalCalories += item.calories * item.amount;
        }
      });

      const newRecipe = new Recipe({
        name,
        detail,
        totalAmount: totalAmount,
        totalCalories,
      });

      const savedRecipe = await newRecipe.save();

      res.status(200).json({
        //data: savedRecipe,
        data: {
          id: savedRecipe._id, // Return the MongoDB _id
          name: savedRecipe.name,
          detail: savedRecipe.detail,
          totalAmount: savedRecipe.totalAmount,
          totalCalories: savedRecipe.totalCalories,
        },
        message: "Create the new recipe successfully",
        status: "success",
      });
    } catch (error) {
      console.error("Error in createRecipe:", error); // Log the detailed error
      res.status(500).json({ message: error.message });
    }
  },
  //Edit Recipe
  updateRecipe: async (req, res) => {
    try {
      console.log("Update Recipe - ID:", req.params.id);
      console.log("Update Recipe - Body:", req.body);

      const { id } = req.params;
      const { name, detail } = req.body;

      if (!Array.isArray(detail)) {
        return res.status(400).json({ message: "Detail must be an array" });
      }

      let totalAmount = 0;
      let totalCalories = 0;

      detail.forEach((item) => {
        if (item.amount && item.calories) {
          totalAmount += item.amount;
          totalCalories += item.calories * item.amount;
        }
      });

      const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        { name, detail, totalAmount: totalAmount, totalCalories },
        { new: true } // Return the updated document
      );

      if (!updatedRecipe) {
        return res.status(http.StatusOK).json({ message: "Recipe not found" });
      }

      res.status(200).json({
        data: updatedRecipe,
        message: "Edit a recipe successfully",
        status: "success",
      });
    } catch (error) {
      console.error("Error in updateRecipe:", error); // Log the detailed error
      res.status(500).json({ message: error.message });
    }
  },
  // Fetch all recipes
  getAllRecipes: async (req, res) => {
    try {
      // Fetch all recipes from the database
      const recipes = await Recipe.find({});

      // Map over the recipes to format the response
      const formattedRecipes = recipes.map((recipe) => ({
        id: recipe._id,
        name: recipe.name,
        totalCalories: recipe.totalCalories,
      }));

      res.status(200).json({
        data: {
          recipe: formattedRecipes,
        },
        status: "success",
      });
    } catch (error) {
      console.error("Error in getAllRecipes:", error);
      res.status(500).json({ message: error.message });
    }
  },
  // Get a recipe by ID
  getRecipeById: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the recipe by ID
      const recipe = await Recipe.findById(id);

      // Check if the recipe was found
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }

      // Return the recipe details
      res.status(200).json({
        data: {
          id: recipe._id,
          name: recipe.name,
          detail: recipe.detail,
          totalAmount: recipe.totalAmount,
          totalCalories: recipe.totalCalories,
        },
        message: "Recipe fetched successfully",
        status: "success",
      });
    } catch (error) {
      console.error("Error in getRecipeById:", error); // Log the detailed error
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a recipe
  deleteRecipe: async (req, res) => {
    try {
      const { id } = req.params;

      // Check if the recipe exists and delete it
      const deletedRecipe = await Recipe.findByIdAndDelete(id);

      if (!deletedRecipe) {
        return res
          .status(404)
          .json({ status: "error", message: "Recipe not found" });
      }

      res.status(200).json({
        status: "success",
        message: "Delete a receipe successfully",
      });
    } catch (error) {
      console.error("Error in delete Recipe:", error); // Log the detailed error
      res.status(500).json({ message: error.message });
    }
  },
};
