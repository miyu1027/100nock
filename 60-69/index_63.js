console.log("RUNNING FILE:", __filename);
console.log("CWD:", process.cwd());

const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(express.json());

const SALT_ROUNDS = 12; // bcryptのコスト係数

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // 入力チェック
    if (!username || !password) {
        return res.status(400).json({ error: "username と password は必須です" });
    }

    try {
        // パスワードをハッシュ化
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        // DBに保存
        db.run(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            [username, passwordHash],
            function (err) {
                if (err) {
                    if (err.code === "SQLITE_CONSTRAINT") {
                        return res.status(409).json({ error: "ユーザ名は既に存在します" });
                    }
                    return res.status(500).json({ error: "DBエラー" });
                }

                res.status(201).json({
                    message: "ユーザ登録成功",
                    userId: this.lastID,
                });
            }
        );
    } catch (err) {
        res.status(500).json({ error: "サーバエラー" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
