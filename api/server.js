const express = require("express");
const app = express();

let status = "no";
let timeout;

app.get("/check", (req, res) => {
  res.json({ status });
});

app.post("/check", (req, res) => {
  status = "yes";
  clearTimeout(timeout);
  timeout = setTimeout(() => status = "no", 1000);
  res.json({ status });
});

module.exports = app;
