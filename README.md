# 40-49
担当箇所は42,45



# 40. APIとは何か

APIとは、ソフトウェアやプログラム、webサービスをつなぐインターフェースのことである。リクエスト(要求)とレスポンス(応答)の2プロセスがあり、利用者がリクエストを送り、サービス提供側がレスポンスを行う。REST APIはRESTという設計原則に則ってwebシステムを外部から利用するための呼び出し規約(API)の一種。RESTはRepresentational State Transfer の略で、Web APIの構築方法に関するルールとガイドラインの集まり。

参考：https://www.redhat.com/ja/topics/api/what-is-a-rest-api

# 41. シンプルなHTTPサーバ
動作確認コード：curl http://localhost:3000/　(ターミナルで実行)
※　-iをつけるとレスポンスヘッダまで見れます。
<img width="624" height="315" alt="image" src="https://github.com/user-attachments/assets/e632504f-0ecb-46a5-ac0b-bfecbde9e012" />


# 42. GETリクエストに対応したAPIの作成
動作確認
<img width="554" height="79" alt="image" src="https://github.com/user-attachments/assets/757a9845-b606-4f80-bb7c-4ecd15544d50" />
ソースコードスクショ(担当が2問あるため)
<img width="812" height="321" alt="image" src="https://github.com/user-attachments/assets/fae0b1b1-e60a-4c63-a7cd-84732d112e13" />


# 45. 配列データを返すAPIの実装
ソースコードスクショ
<img width="814" height="451" alt="image" src="https://github.com/user-attachments/assets/07eae7b8-c25b-4624-91d3-566ddda2f840" />
動作確認(ずっとエラー吐いていて理由わからずです)
