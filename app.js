const express = require("express");
const accounts = require("./accounts");
const app = express();

app.use(express.json());
app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.post("/api/create", (req, res) => {
  console.log(req.body);
  const newBook = {
    bookName: req.body.author,
    releaseDta: req.body.dte,
  };
  harryPotterBooks.push(newBook);
  res.status(201).json({
    message: "Added Book!",
    data: harryPotterBooks,
  });
});
app.listen(800, () => {
  console.log("Server running");
});
