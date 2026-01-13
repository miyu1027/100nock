const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    name: "session_id",
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // httpの場合はfalse（httpsならtrue）
        maxAge: 1000 * 60 * 10
    }
}));

app.get("/login", (req, res) => {
    req.session.user = "sato";
    res.send("logged in");
});

app.get("/check", (req, res) => {
    res.json(req.session);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
