const mongoose = require("mongoose");
const Ingredient = require("../models/ingredient.model"); // Adjust path as needed
const databaseService = require("../config/database.service"); // Adjust path if needed
require("dotenv").config();

const ingredientsData = [
  {
    ingredient: "green leaf lettuce",
    category: "vegetable",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Fgreen%20leaf%20lettuce.png?alt=media&token=fdfb8384-4d1e-4c30-ba00-84972a40456b",
    calories: 8,
  },
  {
    ingredient: "Bok choy",
    category: "vegetable",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FBok%20choy.png?alt=media&token=6e68154c-b56f-4041-9240-c8c8c266479a",
    calories: 7,
  },
  {
    ingredient: "Kale",
    category: "vegetable",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FKale.png?alt=media&token=ce375d0a-4c6c-470e-9b06-c583de3d0fb9",
    calories: 10,
  },
  {
    ingredient: "red cabbage",
    category: "vegetable",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Fred%20cabbage.png?alt=media&token=40080124-984a-4ea0-aa26-9f5362a07c40",

    calories: 10,
  },
  {
    ingredient: "carrots",
    category: "vegetable",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Fcarrots.png?alt=media&token=0573c045-5483-4b5d-be06-2363080ab962",
    calories: 12,
  },
  {
    ingredient: "avocado",
    category: "fruit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Favocado.png?alt=media&token=96c98fe5-f644-458b-9c68-6fa409deb94a",
    calories: 120,
  },
  {
    ingredient: "Tomato",
    category: "fruit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FTomato.png?alt=media&token=d1f0767b-146c-4f11-baf9-0cf7a0e3e9f4",
    calories: 18,
  },
  {
    ingredient: "pineapple",
    category: "fruit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Fpineapple.png?alt=media&token=c06b0e4c-e151-4114-95c3-c8285632c27a",
    calories: 25,
  },
  {
    ingredient: "mix berries",
    category: "fruit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2Fmix%20berries.png?alt=media&token=7ea8095b-5dfe-4aa6-bb49-6ce2b49fe829",
    calories: 28,
  },
  {
    ingredient: "Corn",
    category: "fruit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FCorn.png?alt=media&token=d05f6bd0-9d82-40b2-9c6d-86e58cf2a128",
    calories: 43,
  },
  {
    ingredient: "Grilled Shrimp",
    category: "protein",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FGrilled%20Shrimp.png?alt=media&token=97ac476f-2ee9-4a88-8411-e1eee97e4c01",
    calories: 98,
  },
  {
    ingredient: "Grilled Chicken Breast",
    category: "protein",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FGrilled%20Chicken%20Breast.png?alt=media&token=67b46a4e-7115-473c-b0e9-f2a37dae31fb",
    calories: 165,
  },
  {
    ingredient: "Bacon",
    category: "protein",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FBacon.png?alt=media&token=13d6e866-b8a7-4811-ad51-c9eb6a718789",
    calories: 108,
  },
  {
    ingredient: "Smoked Salmon",
    category: "protein",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FSmoked%20Salmon.png?alt=media&token=8f18e786-c7ca-4a45-85ad-c16304f922d1",
    calories: 58,
  },
  {
    ingredient: "Grilled Beef",
    category: "protein",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FGrilled%20Beef.png?alt=media&token=5d9276a9-8ac0-4439-94ad-f3997d3dccb7",
    calories: 250,
  },
  {
    ingredient: "Crouton",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FCrouton.png?alt=media&token=5a19dcea-e9b0-4df8-ac5f-7076d4c86c2f",
    calories: 81,
  },
  {
    ingredient: "Barley",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FBarley.png?alt=media&token=50e31673-4778-4fbd-9f90-551e2b68c657",
    calories: 100,
  },
  {
    ingredient: "Cashew Nut",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FCashew%20Nut.png?alt=media&token=d1a7ceb9-3b80-4411-9d0f-18ec55a58fed",
    calories: 110,
  },
  {
    ingredient: "Cream Dressing",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FCream%20Dressing.png?alt=media&token=ec6567e0-69b9-4f1a-ba96-57210ca3fe6d",
    calories: 60,
  },
  {
    ingredient: "Balsamic Dressing",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FBalsamic%20Dressing.png?alt=media&token=a2c3b2f2-84f1-4b9a-a05d-1313c01c0618",
    calories: 26,
  },
  {
    ingredient: "Japanese Shoyu",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FJapanese%20Shoyu.png?alt=media&token=5f83de6e-ee5d-452e-b996-5bec3c7db04c",
    calories: 15,
  },
  {
    ingredient: "Seafood Cream Dressing",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FSeafood%20Cream%20Dressing.png?alt=media&token=a930f2a2-7d97-4668-97c7-d1bd28ff918b",
    calories: 75,
  },
  {
    ingredient: "Roast Sesame Dressing",
    category: "dressing",
    image:
      "https://firebasestorage.googleapis.com/v0/b/salad-maker-application-bbb1d.appspot.com/o/images%2FRoast%20Sesame%20Dressing.png?alt=media&token=dfb7a37d-d5c2-4a31-90f3-05f0c824df11",
    calories: 60,
  },
];

databaseService.connect();

const seedDb = async () => {
  try {
    await Ingredient.deleteMany({}); // Clear existing data
    console.log("Existing data cleared.");

    await Ingredient.insertMany(ingredientsData); // Insert new data
    console.log("Ingredient seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close(); // Ensure the connection is closed
    console.log("MongoDB connection closed.");
  }
};

seedDb();
