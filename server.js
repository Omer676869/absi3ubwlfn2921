const express = require("express");
const app = express();

let status = "no";
let timeout = null;

app.use(express.json());

// GET status
app.get("/check/", (req, res) => {
  res.json({ status });
});

// BUTTON trigger
app.post("/check/", (req, res) => {
  status = "yes";

  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    status = "no";
  }, 1000);

  res.json({ status });
});

module.exports = app;
