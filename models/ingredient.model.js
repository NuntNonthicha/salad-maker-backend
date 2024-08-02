const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    ingredient: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ["vegetable", "fruit", "toppings", "protein", "dressing"],
      required: true,
    },
    image: { type: String, default: null },
    calories: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;
