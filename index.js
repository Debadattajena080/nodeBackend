require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send(`<h1>About</h1> <p>This is the about page.</p>`);
});

app.listen(process.env.PORT, () => {
  console.log(`server started at port: ${process.env.PORT}`);
});
