90-99

# 92 シンプルなNode.js＋Expressアプリ（「Hello, Render!」を返す等）をGitHubにpushし，Renderにデプロイして公開

手順1.ローカルでNode.js + Expressアプリ作成

```
#(新規ディレクトリを作る)
npm init -y
npm install express
```

index.jsの中身
```
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Render!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

package.jsonのscriptsを以下のように変更
```
"scripts": {
  "start": "node index.js"
}
```

その後、
```
npm start
```
```
node index.js
```
と出ればok

ブラウザでは
<img width="539" height="308" alt="スクリーンショット 2026-02-03 011729" src="https://github.com/user-attachments/assets/40d17c99-c681-4e75-98d5-3a23da1f7a6b" />

手順2.GitHubにPush

.gitignore追加
```
node_modules
.env
```

Git初期化＆push
```
git init
git add .
git commit -m "Initial commit: Hello Render app"
```
githubで新しいリポジトリ作成(今回の名前は100nock_90-99_render)
```
git remote add origin https://github.com/miyu1027/100nock_90-99_render.git
git branch -M main
git push -u origin main
```
新しいリポジトリはこちら
https://github.com/miyu1027/100nock_90-99_render

手順3.renderにデプロイ

Renderにログイン → Dashboardを開く → +newでweb service → githubリポジトリ連携 → create new service

完了時画面
<img width="1919" height="1069" alt="スクリーンショット 2026-02-03 014054" src="https://github.com/user-attachments/assets/b1689996-c161-44a8-9e75-7b76187709b8" />

Available at your primary URL https://one00nock-90-99-render.onrender.com ←このリンクにアクセス
<img width="671" height="321" alt="スクリーンショット 2026-02-03 014114" src="https://github.com/user-attachments/assets/321333d4-4069-4e60-8a42-656012ad904f" />

こうなれば成功


