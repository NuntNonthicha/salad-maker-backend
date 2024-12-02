const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");

const databaseService = require("./config/database.service.js");
require("dotenv").config();

const { readdirSync } = require("fs");

const Router = require("./routes/router.js");

const app = express();

databaseService.connect();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParse.json({ limit: "10mb" }));

const PORT = process.env.PORT || 5001;

app.use("/api", Router);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
