const mongoose = require("mongoose");

class databaseService {
  static async connect() {
    const dbUrl = process.env.MONGO_URL;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      await mongoose.connect(dbUrl, options);
      console.log("MongoDB is Connected!");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }
}

module.exports = databaseService;
