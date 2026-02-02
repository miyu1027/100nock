90-99

課題用リポジトリ

https://github.com/miyu1027/100nock_90-99_render

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


# 93. Webアプリの自動デプロイ（CI/CD）を設定せよ

自動デプロイ設定確認(この画面ではauto deployがon commitになっているのでok)
<img width="1919" height="569" alt="image" src="https://github.com/user-attachments/assets/3ed77a66-8d2c-47d8-91b0-c348ec975e0c" />

ソースコード修正(ここでは、表示される言葉を変更)
```
app.get("/", (req, res) => {
    res.send("Hello, Render! Auto deploy works!");
});
```

githubへ再push
```
git add index.js
git commit -m "Update message for auto deploy test"
git push
```

renderのlogを見ると2:09(再pushの時間)のあたりで自動的にDeploying...になっている
<img width="1919" height="1059" alt="image" src="https://github.com/user-attachments/assets/9535b774-e23a-4f49-be8a-077b9a0bcce7" />

先ほどのhttps://one00nock-90-99-render.onrender.comを更新して再アクセス → 文字が変わっている
<img width="660" height="257" alt="image" src="https://github.com/user-attachments/assets/5d34b1ff-8e81-4529-8601-08b195a5ed08" />

RenderのGitHub連携機能を有効化し，リポジトリ更新時に自動的に再デプロイされることを確認した。
ソースコードを変更してpushしたところ，Render側で新しいデプロイが実行され，公開ページの表示が更新された。

# 94. 環境変数（Environment Variables）を設定せよ
renderのenvironmentのページで作成
<img width="1919" height="776" alt="image" src="https://github.com/user-attachments/assets/a44e3d5d-f289-4864-8bca-4a9787674aac" />

ローカルのindex.jsを以下のように変更
```
app.get("/", (req, res) => {
  const msg = process.env.MESSAGE || "No env variable set";
  res.send(`ENV MESSAGE: ${msg}`);
});
```
githubに再push
```
git add index.js
git commit -m "Read env var from Render"
git push
```
自動デプロイするので、renderのlogからブラウザに再アクセスするとこの表示になる → 成功
<img width="665" height="233" alt="image" src="https://github.com/user-attachments/assets/1c010a20-e865-49aa-b8f1-52d66020491c" />

# 95. ルート以外のエンドポイントの公開
/api/helloや/aboutなど複数のエンドポイントを持つWebアプリをRenderに公開すること．

index.jsを以下のように変更(/api/helloや/aboutなど複数のエンドポイントを作成)
```
app.get("/", (req, res) => {
  res.send("Top page");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello API!" });
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});
```
※再起動してnpm startで更新して確認
http://localhost:3000(/api/hello, /about)にアクセス
<img width="538" height="208" alt="image" src="https://github.com/user-attachments/assets/3a9e0082-4611-4127-a9a0-1f3c036a1b55" />

<img width="536" height="230" alt="image" src="https://github.com/user-attachments/assets/0371e12e-c6d8-49cb-8508-4ab6a30e0eee" />

<img width="533" height="204" alt="image" src="https://github.com/user-attachments/assets/c5474f0e-02fc-4ef8-b723-125561234fc5" />

その後githubに再push
<img width="816" height="361" alt="image" src="https://github.com/user-attachments/assets/040f3687-cc90-4915-9021-57a274820133" />

renderからブラウザにアクセス(/,/api/hello, /about) → エンドポイント公開成功
<img width="657" height="211" alt="image" src="https://github.com/user-attachments/assets/7983f249-a682-4076-aef7-7624c9a96262" />

<img width="704" height="212" alt="image" src="https://github.com/user-attachments/assets/4997923c-7c39-423b-9189-18fb4b16b24f" />

<img width="696" height="186" alt="image" src="https://github.com/user-attachments/assets/52e7d804-1134-41fc-9607-7abb2e10c0c0" />


# 96. チーム開発用にリポジトリをfork・clone
他のメンバーのGitHubリポジトリをforkし，ローカルにcloneして開発環境を整えること．

※今回は同じBグループの惣門君のリポジトリをお借りします。https://github.com/Shintaro0330/100nocks/tree/main

Forkと書かれているところをクリック → 「Forkを作成する」クリック → 自分のアカウントにコピーされる(forked from Shintaro0330/100nocks と表示される)

<img width="1919" height="1054" alt="image" src="https://github.com/user-attachments/assets/6b7885a6-d61b-43cd-a6a1-170084f01fc4" />

コードをコピーしてgit clone
<img width="927" height="244" alt="image" src="https://github.com/user-attachments/assets/447c6a6f-bc84-4803-80d7-b5ce39b566d0" />
