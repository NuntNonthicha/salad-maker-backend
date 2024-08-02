const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    detail: [
      {
        ingredient: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String },
        calories: { type: Number, required: true },
        amount: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
    },
    totalCalories: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
