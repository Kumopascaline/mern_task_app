const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Home page");
});
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// mongodb+srv://Pascaline123:<password>@pascalinecluster.4aknyqy.mongodb.net/?retryWrites=true&w=majority
