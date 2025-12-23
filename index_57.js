#57のindex.js

const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
const db = new sqlite3.Database("construct.db");

// ルート確認
app.get("/", (req, res) => {
  res.send("Express + SQLite is working");
});

// ユーザ一覧API
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

