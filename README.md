# 50-59

担当箇所は57

# 50. データベースとは何か
データベースおよびRDBMSについて調査し，主要な特徴や用途を200字程度でまとめること．

データベースは、情報を特定のルールに則って分類し、構造化したもの。各データは、カラム(項目)とレコード(行)で構成される。これにより情報の検索・抽出・加工が容易になり、データ分析などでデータの効率的な運用が可能になり、データをビジネスなどに活用できる。
RDBMSはリレーショナルデータベース管理システム。データベースの作成・検索・更新・削除などを効率化するソフトウェアのことである。ユーザがデータに直接触れずに安全に効率的にデータベース作成などができる。

違いは以下の通り。
■データベース
自動ではデータを整理しない。データをわかりやすく保存し、抽出するには適宜人の手を介さなければならない。

■データベース管理システム
自動でデータ整理を行う。簡単にデータを編集し、抽出ができる。データの重複入力などでの警告機能がある。

参考(一部引用)：https://it-trend.jp/database/article/89-0065


| 名前           | 役割               |

| ------------ | ---------------- |

| SQL          | データ操作の言語         |

| SQLite       | SQLを実行するエンジン     |

| construct.db | SQLiteが扱うデータファイル |

by ChatGPT


# 51. SQLiteを用いたデータベースの作成

SQLiteのインストールおよび，コマンドラインから空のデータベースファイルを作成すること．
.tablesコマンドでテーブル一覧を表示すること．

<img width="623" height="164" alt="image" src="https://github.com/user-attachments/assets/d0d840ea-99c6-40d5-b52a-bcc01a057b39" />

※テーブル未作成のため、.tablesにはなにも返答なし

<img width="300" height="55" alt="image" src="https://github.com/user-attachments/assets/fdc31220-0f19-4e4d-ad2a-edaff4825b59" />


# 52. SQLでテーブルを作成
任意のデータ構造（例：ユーザ情報，商品情報等）を想定し，CREATE TABLE文でテーブルを作成すること．
カラム名・型を工夫して設計すること．

<img width="630" height="210" alt="image" src="https://github.com/user-attachments/assets/7d7f0704-3ee6-407b-9428-471ae4383327" />

↓実行確認

<img width="536" height="185" alt="image" src="https://github.com/user-attachments/assets/6e7ac858-4a84-4473-b4a9-84d892f6aaa6" />


# 53. レコードの追加・検索
INSERT INTO文でデータを追加し，SELECT文で検索すること．

INSERT INTO 文は、テーブルに新しいレコード（行）を追加し、各カラムに値を代入するためのSQL文

<img width="665" height="106" alt="image" src="https://github.com/user-attachments/assets/128a310f-a09d-44e5-92c9-795cdcec4c58" />

↓複数行追加

<img width="674" height="443" alt="image" src="https://github.com/user-attachments/assets/a625773d-26bb-4810-beb3-fdba99f62dd4" />


# 54. レコードの更新・削除
UPDATE文でデータの一部を更新し，DELETE文でレコードを削除すること．

↓UPDATE

<img width="602" height="232" alt="image" src="https://github.com/user-attachments/assets/10874a9d-1194-4a72-88df-da1a86a71299" />

↓DELETE

<img width="576" height="212" alt="image" src="https://github.com/user-attachments/assets/7246ad5f-f347-468e-a4c1-07347110e8fb" />


# 55. 複数条件での検索や並べ替え

先に年齢項目を追加(数値で並べ替えたかったため)

<img width="697" height="513" alt="image" src="https://github.com/user-attachments/assets/4cb08146-d158-4a88-a670-a3e384ef8e47" />

並べ替え後(22歳以上で、降順)

<img width="654" height="182" alt="image" src="https://github.com/user-attachments/assets/f3e2107b-714c-4f2d-8382-05015e6ae4d9" />


# 56. Node.jsからデータベースに接続
Node.jsのSQLiteライブラリ（例：sqlite3）を用いて，データベースに接続し，テーブル一覧を取得して表示すること．

"Node.js = JavaScriptを「ブラウザの外」で動かす環境"　by ChatGPT

まずbashでディレクトリを立ち上げ、sqlite3をインストール。その後、ディレクトリ内にindex.jsを作る。

<img width="684" height="591" alt="image" src="https://github.com/user-attachments/assets/44c79685-07d4-496b-99aa-97aa0b84578d" />

↓実行結果

<img width="736" height="143" alt="image" src="https://github.com/user-attachments/assets/b1f8e10d-9f9a-4bba-8000-65fecefee5ba" />


# 57. Webサーバとデータベースの連携
Expressサーバ上で，データベースから取得したレコードの一覧をJSONで返すAPIを実装すること．

bash上でnpm install express(expressインストール)

↓index.js

<img width="930" height="857" alt="image" src="https://github.com/user-attachments/assets/bebe0aa5-e81a-49ff-927d-a9236f7239ca" />


↓bashでnode index.jsした結果

<img width="655" height="59" alt="image" src="https://github.com/user-attachments/assets/9df32c16-098d-4f0c-b1ec-692728d090f5" />

↓新たにbashを起動して、curlコマンド実行

<img width="1185" height="163" alt="image" src="https://github.com/user-attachments/assets/9e26320b-0b2d-420b-99a6-ad8913784c49" />



# 58. Webフォームからの入力データをデータベースに登録
簡単なWebフォームを用意し，ユーザが入力したデータをPOSTで受け取り，サーバでデータベースに登録する仕組みを実装すること．

↓webフォーム

<img width="932" height="503" alt="image" src="https://github.com/user-attachments/assets/f150c6c4-1177-4c02-bef9-38ae9f5c18a1" />

<img width="1030" height="496" alt="image" src="https://github.com/user-attachments/assets/0c0b1573-b267-43de-aa69-b637a9cb19fa" />




# 59. 登録データの編集・削除機能の実装
登録されたデータの編集・削除ができるAPIや画面を実装すること．
最低限，APIで更新・削除処理が動作することを確認する．
