const express = require("express");
const { products, users } = require("./dummy.json");
const app = express();

app.get("/products", (req, res) => {
  res.type = "application/json";
  res.send({ products: products });
});

app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ users: users });
});

app.get("/usernames", (req, res) => {
  res.type = "application/json";
  const usernames = users.map((a) => {
    return a.name;
  });
  console.log(usernames);
  res.send({ usernames });
});

app.listen(3001, () => {
  console.log("Server is listening");
});
