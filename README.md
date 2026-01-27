# 81. 非同期通信（Promise）の基本
Promiseオブジェクトを作成し，then/catchによる非同期処理の基本を理解するサンプルコードを作成すること

提出：JavaScriptコード、コンソール出力のスクリーンショット


非同期通信における.then()と.catch()は、Promiseオブジェクトを用いて成功・失敗時の処理を分けるメソッド

【基本構文と特徴】

then(): 非同期処理が正常終了した（Fulfilled）際に実行されるコールバック関数を登録

catch(): 非同期処理が異常終了した（Rejected）際に実行されるエラーハンドリング関数を登録

finally(): 成否にかかわらず、通信完了後に必ず実行するクリーンアップ処理（ロード画面の非表示など）


sample.js
```
// Promise を作成する関数
function asyncTask(success) {
    return new Promise((resolve, reject) => {
        console.log("処理開始...");

        // 非同期処理をシミュレーション（2秒後に完了）
        setTimeout(() => {
            if (success) {
                resolve("成功しました！");
            } else {
                reject("失敗しました...");
            }
        }, 2000);
    });
}

// --- 実行する ---
asyncTask(true)
    .then(result => {
        console.log("then:", result);
    })
    .catch(error => {
        console.error("catch:", error);
    });

```

ターミナルでnode sample.jsと打って実行したとき
<img width="547" height="90" alt="image" src="https://github.com/user-attachments/assets/ed3f28e1-f55c-446a-a415-717bfc13a729" />

※別解：chromeページ右クリック→検証→コンソールにコード貼り付け
<img width="1288" height="721" alt="image" src="https://github.com/user-attachments/assets/c7edaf54-bc43-4a4d-926d-d8abc48c212c" />



参考

https://qiita.com/3062_in_zamud/items/f2b2fa556d0a27bdde9e

https://zenn.dev/yomogi12/articles/8a222be9665d8a
