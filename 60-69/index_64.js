const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(express.json());

const SALT_ROUNDS = 12; // bcryptのコスト係数

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (!user) {
        return res.status(401).json({ error: "認証失敗" });
      }

      const ok = await bcrypt.compare(password, user.password_hash);
      if (!ok) {
        return res.status(401).json({ error: "認証失敗" });
      }

      res.json({ message: "ログイン成功" });
    }
  );
});
